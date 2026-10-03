import Link from "next/link";
import { Container } from "@/components/Container";

const nav = [
  { href: "/", label: "Start" },
  { href: "/buero", label: "Büro" },
  { href: "/leistungen", label: "Leistungen" },
];

export function Header() {
  return (
    <header className="bg-[#63544d] text-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.18em]">
              DIPL.-ING. ULRIKE WALTER
            </div>
            <div className="text-xs font-medium tracking-[0.12em] opacity-90">
              Fachplanung Brandschutz
            </div>
          </Link>
          <nav className="flex items-center gap-5 text-sm text-white/90">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

