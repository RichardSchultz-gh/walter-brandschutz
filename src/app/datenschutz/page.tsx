import { Container } from "@/components/Container";

export const metadata = {
  title: "Datenschutz – Fachplanung Brandschutz Walter",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-[#b1353a]">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-white/15 bg-white p-8 sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
              DATENSCHUTZ
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-700">
              Datenschutzerklärung
            </p>

            <div className="mt-10 space-y-8 text-zinc-700">
              <section>
                <h2 className="text-lg font-semibold text-zinc-950">Verantwortliche</h2>
                <p className="mt-2 leading-7">
                  Dipl.-Ing. Ulrike Walter MEng<br />
                  Ingenieurbüro für Brandschutzplanung<br />
                  Ring am Feld 10<br />
                  14532 Kleinmachnow<br />
                  E-Mail:{" "}
                  <a href="mailto:info@walter-brandschutz.de" className="underline">
                    info@walter-brandschutz.de
                  </a>
                  <br />
                  Telefon: 033203-886 700
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-950">Kontaktformular</h2>
                <p className="mt-2 leading-7">
                  Wenn Sie das Kontaktformular auf dieser Website nutzen, werden folgende
                  Angaben erhoben: Name, E-Mail-Adresse, Telefonnummer, Beschreibung des
                  Bauvorhabens sowie Ihre Nachricht. Diese Daten werden ausschließlich
                  verwendet, um Ihre Anfrage zu beantworten und per E-Mail an die
                  Inhaberin weitergeleitet. Eine Speicherung über den E-Mail-Verkehr
                  hinaus findet nicht statt.
                </p>
                <p className="mt-2 leading-7">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                  Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                  an der Bearbeitung von Kontaktanfragen).
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-950">Hosting</h2>
                <p className="mt-2 leading-7">
                  Diese Website wird auf einem eigenen Server betrieben. Beim Aufruf der
                  Website werden technisch bedingt Verbindungsdaten (IP-Adresse,
                  Zeitpunkt, aufgerufene Seite) kurzzeitig verarbeitet. Diese Daten
                  werden nicht gespeichert und nicht an Dritte weitergegeben.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-950">Cookies</h2>
                <p className="mt-2 leading-7">
                  Diese Website verwendet keine Cookies und keine Tracking- oder
                  Analysetools.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-zinc-950">Ihre Rechte</h2>
                <p className="mt-2 leading-7">
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das
                  Recht auf Datenübertragbarkeit. Wenden Sie sich dazu bitte per E-Mail
                  an{" "}
                  <a href="mailto:info@walter-brandschutz.de" className="underline">
                    info@walter-brandschutz.de
                  </a>
                  . Außerdem haben Sie das Recht, sich bei einer
                  Datenschutz-Aufsichtsbehörde zu beschweren.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
