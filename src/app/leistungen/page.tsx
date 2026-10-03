import { Container } from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Leistungen – Fachplanung Brandschutz Walter",
};

const items: Array<{ title: string; body?: string }> = [
  {
    title:
      "BRANDSCHUTZNACHWEISE/ -KONZEPTE nach Bauordnung des jeweiligen Bundeslandes",
    body: "Leistungsphasen 1 bis 4 im Sinne AHO Heft 17",
  },
  {
    title:
      "MITWIRKEN BEI DER AUSFÜHRUNGSPLANUNG/ VERGABE",
    body: "Leistungsphasen 5 bis 7 im Sinne AHO Heft 17",
  },
  {
    title: "FACHBAULEITUNG BRANDSCHUTZ",
    body: "Leistungsphase 8 im Sinne AHO Heft 17",
  },
  { title: "FLUCHT- UND RETTUNGSWEGPLÄNE", body: "gemäß DIN ISO 23601" },
  { title: "FEUERWEHRPLÄNE", body: "gemäß DIN 14095" },
  {
    title: "MITWIRKEN BEI ERSTELLUNG DER BRANDSCHUTZORDNUNG",
    body: "gemäß DIN 14096",
  },
  { title: "BERECHNUNGEN NACH DIN 18230, DIN 18232" },
  { title: "TECHNICAL DUE DILIGENCE (TDD) FÜR BESTANDSBAUTEN" },
  { title: "BRANDSCHUTZBERATUNG" },
];

export default function LeistungenPage() {
  return (
    <div className="bg-[#b1353a]">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-white/15 bg-white p-8 sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
              LEISTUNGEN
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-700">
              für Brandschutzplanung
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
                <div className="font-semibold text-zinc-900">Hinweis</div>
                <p className="mt-2">
                  Ich bin in die Liste der Prüfingenieure für Brandschutz im Land
                  Berlin eingetragen. Wird von mir für ein Bauvorhaben im Land
                  Brandenburg ein Brandschutznachweis für die Gebäudeklasse 4
                  erstellt, entfällt somit die bauaufsichtliche Prüfpflicht.
                </p>
              </div>

              <ul className="grid gap-4">
                {items.map((it) => (
                  <li
                    key={it.title}
                    className="rounded-2xl border border-black/10 p-6"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
                      {it.title}
                    </div>
                    {it.body ? (
                      <div className="mt-2 text-sm leading-6 text-zinc-700">
                        {it.body}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#6b7280] px-6 text-sm font-medium text-white hover:bg-[#5f6673]"
                  href="/#kontakt"
                >
                  Senden
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

