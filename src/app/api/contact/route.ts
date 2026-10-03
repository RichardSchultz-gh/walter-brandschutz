import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(5).max(80),
  project: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
  privacyOk: z.literal(true),
  company: z.string().optional(), // honeypot
});

const ipHits = new Map<string, { count: number; resetAtMs: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const max = 10;

  for (const [key, val] of ipHits) {
    if (val.resetAtMs <= now) ipHits.delete(key);
  }

  const entry = ipHits.get(ip);
  if (!entry) {
    ipHits.set(ip, { count: 1, resetAtMs: now + windowMs });
    return { ok: true as const };
  }
  if (entry.count >= max) return { ok: false as const, retryAfterSec: 60 };
  entry.count += 1;
  return { ok: true as const };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 },
    );
  }

  const { company, name, email, phone, project, message } = parsed.data;
  if (company && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.SMTP_TO;

  if (!host || !user || !pass || !from || !to) {
    return NextResponse.json(
      { ok: false, error: "server_not_configured" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Kontaktanfrage – ${name}`;
  const text = [
    "Neue Kontaktanfrage über die Website",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    `Bauvorhaben: ${project}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true });
}

