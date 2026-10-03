"use client";

import { useMemo, useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

function errorMessage(code: string) {
  switch (code) {
    case "rate_limited":
      return "Zu viele Anfragen. Bitte versuchen Sie es später erneut.";
    case "server_not_configured":
      return "Formular ist aktuell nicht konfiguriert. Bitte nutzen Sie die E-Mail-Adresse.";
    case "invalid_input":
      return "Bitte prüfen Sie Ihre Eingaben.";
    default:
      return "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.";
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [privacyOk, setPrivacyOk] = useState(false);
  const [company, setCompany] = useState(""); // honeypot

  const canSend = useMemo(() => {
    if (status.kind === "sending") return false;
    if (name.trim().length < 2) return false;
    if (email.trim().length < 5) return false;
    if (phone.trim().length < 5) return false;
    if (project.trim().length < 2) return false;
    if (message.trim().length < 10) return false;
    if (!privacyOk) return false;
    return true;
  }, [email, message, name, phone, privacyOk, project, status.kind]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          project,
          message,
          privacyOk,
          company,
        }),
      });

      const data: unknown = await res.json().catch(() => null);
      const ok =
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        typeof (data as Record<string, unknown>).ok === "boolean"
          ? (data as Record<string, unknown>).ok
          : null;

      if (!res.ok || ok !== true) {
        const code =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as Record<string, unknown>).error === "string"
            ? ((data as Record<string, unknown>).error as string)
            : "unknown";
        setStatus({ kind: "error", message: errorMessage(code) });
        return;
      }

      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: errorMessage("unknown") });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900">Name</span>
        <input
          className="h-11 rounded-xl border border-black/10 px-3 outline-none focus:ring-2 focus:ring-black/10"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900">E-Mail</span>
        <input
          className="h-11 rounded-xl border border-black/10 px-3 outline-none focus:ring-2 focus:ring-black/10"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900">Telefonnummer</span>
        <input
          className="h-11 rounded-xl border border-black/10 px-3 outline-none focus:ring-2 focus:ring-black/10"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900">Bauvorhaben</span>
        <input
          className="h-11 rounded-xl border border-black/10 px-3 outline-none focus:ring-2 focus:ring-black/10"
          name="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        />
      </label>

      {/* Honeypot (hidden for humans, visible for bots) */}
      <div className="hidden">
        <label className="grid gap-2 text-sm">
          <span>Firma</span>
          <input
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm sm:col-span-2">
        <span className="font-medium text-zinc-900">Nachricht</span>
        <textarea
          className="min-h-28 resize-y rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <label className="mt-2 flex items-start gap-3 text-sm text-zinc-700 sm:col-span-2">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-black/20"
          checked={privacyOk}
          onChange={(e) => setPrivacyOk(e.target.checked)}
          required
        />
        <span>Ich habe die Datenschutzbestimmungen zur Kenntnis genommen</span>
      </label>

      <button
        className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        disabled={!canSend}
      >
        {status.kind === "sending" ? "Senden…" : "Senden"}
      </button>

      <div className="mt-3 text-xs text-zinc-500 sm:col-span-2">
        Alternativ per E-Mail:{" "}
        <a className="underline" href="mailto:info@walter-brandschutz.de">
          info@walter-brandschutz.de
        </a>
      </div>

      {status.kind === "sent" ? (
        <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800 sm:col-span-2">
          Vielen Dank! Ihre Nachricht wurde gesendet.
        </div>
      ) : null}
      {status.kind === "error" ? (
        <div className="rounded-xl bg-red-50 p-3 text-sm text-red-800 sm:col-span-2">
          {status.message}
        </div>
      ) : null}
    </form>
  );
}

