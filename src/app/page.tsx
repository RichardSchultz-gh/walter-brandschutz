import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <section
        className="relative py-20 sm:py-28"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <Container>
          <div className="relative max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              INGENIEUR- BÜRO
            </h1>
            <p className="mt-4 text-lg font-medium tracking-tight text-zinc-700 sm:text-xl">
              für Brandschutzplanung
            </p>
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-700">
              Willkommen
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              auf den Internetseiten des Büros Fachplanung Brandschutz Walter.
              Gern würde ich Sie als Fachplaner Brandschutz bei Ihren Bauvorhaben
              begleiten und eine ausgewogene und wirtschaftliche Lösung
              erarbeiten. Ich freue mich auf eine gute Zusammenarbeit bei
              interessanten Projekten!
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-black/5"
              >
                Leistungen ansehen
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-black/5"
              >
                Angebot anfordern
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="kontakt" className="border-t border-black/10 bg-[#b1353a] py-16">
        <Container>
          <div className="max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="h-full rounded-2xl border border-white/15 bg-white p-6">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Kontakt
                </div>
                <p className="mb-4 text-sm text-zinc-600">
                  Schreiben Sie mir gern eine Nachricht.
                </p>
                <ContactForm />
              </div>

              <aside className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 text-white">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  Impressum
                </div>
                <div className="text-lg font-semibold">
                  Dipl.-Ing. Ulrike Walter MEng
                </div>
                <div className="mt-1 text-sm text-white/90">
                  Fachplanung Brandschutz
                </div>

                <div className="mt-6 space-y-1 text-sm">
                  <div>Ring am Feld 10</div>
                  <div>14532 Kleinmachnow</div>
                </div>

                <div className="mt-6 space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Tel.</span>{" "}
                    <a className="underline" href="tel:+4933203886700">
                      033203-886 700
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Fax.</span> 033203-886 702
                  </div>
                  <div>
                    <a
                      className="underline"
                      href="mailto:info@walter-brandschutz.de"
                    >
                      info@walter-brandschutz.de
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/15">
              <iframe
                src="https://maps.google.com/maps?q=Dipl.-Ing.+Ulrike+Walter+MEng+Fachplanung+Brandschutz,+Ring+am+Feld+10,+14532+Kleinmachnow&output=embed&z=14"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bürostandort Fachplanung Brandschutz Walter"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
