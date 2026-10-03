import { Container } from "@/components/Container";

export const metadata = {
  title: "Büro – Fachplanung Brandschutz Walter",
};

export default function BueroPage() {
  return (
    <div className="bg-[#b1353a]">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-white/15 bg-white p-8 sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
              DAS BÜRO
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-700">
              für Brandschutzplanung
            </p>

            <div className="mt-10 space-y-4 text-lg leading-8 text-zinc-700">
              <p>
                Inhaberin Dipl.-Ing. Ulrike Walter MEng Bauingenieurstudium TU
                Braunschweig, Masterstudium Vorbeugender Brandschutz EIPOS/ FH
                Zittau, Mehr als 25 Jahre Berufserfahrung in der Fachplanung
                Brandschutz,
              </p>
              <p>
                Anerkennung als Prüfingenieurin für Brandschutz, eigenständiges
                Büro mit Firmensitz in Berlin Steglitz-Zehlendorf
              </p>
              <p>Gründung 16.02.2007</p>
              <p>Mitgliedschaften Baukammer Berlin</p>
              <p>BVS Berlin-Brandenburg e. V.</p>
              <p>
                Haftpflichtversicherung VHV Allgemeine Versicherung AG, Personen-
                sowie Sach- und Vermögensschäden
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-black/10 bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-zinc-900">INHABERIN</div>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-700">
                <a href="mailto:info@walter-brandschutz.de" className="underline">
                  info@walter-brandschutz.de
                </a>
                <a href="tel:+4933203886700" className="underline">
                  033203-886 700
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

