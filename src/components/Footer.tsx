import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#63544d] text-white">
      <Container>
        <div className="flex flex-col gap-3 py-10 text-sm text-white/90">
          <div className="font-medium text-white">
            Dipl.-Ing. Ulrike Walter – Fachplanung Brandschutz
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className="underline" href="mailto:info@walter-brandschutz.de">
              info@walter-brandschutz.de
            </a>
            <a className="underline" href="tel:+4933203886700">
              033203-886 700
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70">
            <span>© 2026 Dipl.-Ing. Ulrike Walter</span>
            <a href="/datenschutz" className="underline hover:text-white/90">
              Datenschutz
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

