# PRD: Kontakt-Sektion Layout

## Problem Statement

Die Kontakt-Sektion der Startseite hatte zwei Schwachstellen:

1. Der Titel „Kontakt" und der Beschreibungstext standen außerhalb der weißen Karte, während der „Impressum"-Titel innerhalb seiner Karte war — die beiden nebeneinander liegenden Karten wirkten dadurch strukturell ungleich.
2. Besucher konnten den Bürostandort nicht auf einen Blick erfassen. Die Adresse steht zwar im Impressum, aber eine visuelle Karte fehlte — das erschwert die Anfahrtsplanung.

## Solution

Den Titel „Kontakt" und den Beschreibungstext in die weiße Kontakt-Karte verschieben, sodass beide Karten ihren Titel intern tragen und auf gleicher Höhe starten. Unterhalb des Karten-Grids wird eine Google Maps Karte als `<iframe>`-Embed eingebettet, die den Bürostandort in Kleinmachnow zeigt. Die Datenschutzerklärung wird um einen entsprechenden Abschnitt ergänzt.

## User Stories

1. Als Besucherin der Website möchte ich, dass Kontakt- und Impressum-Bereich auf gleicher Höhe beginnen, damit die Seite ordentlich und symmetrisch aussieht.
2. Als Besucherin möchte ich den Beschreibungstext direkt über dem Formular sehen, damit ich sofort weiß, was ich in diesem Bereich tun kann.
3. Als Websitebesucher möchte ich die Lage des Büros auf einer Karte sehen, damit ich die Anfahrt besser planen kann.
4. Als Websitebesucher möchte ich den Stadtteil und die Umgebung des Büros erkennen, damit ich weiß, wo Kleinmachnow liegt.
5. Als Websitebesucher möchte ich den Büronamen auf der Karte sehen, damit ich den Standort eindeutig identifizieren kann.
6. Als Websitebesucher möchte ich die Karte direkt auf der Startseite sehen, ohne eine separate Seite öffnen zu müssen.
7. Als Websitebesucher möchte ich die Karte in Google Maps öffnen können, damit ich eine Routenführung starten kann.
8. Als Inhaberin möchte ich, dass die Karte optisch zum Rest der Kontakt-Sektion passt, damit die Seite einheitlich wirkt.
9. Als Inhaberin möchte ich, dass die Karte DSGVO-konform eingesetzt wird und in der Datenschutzerklärung dokumentiert ist.
10. Als Websitebesucher möchte ich die Karte auch auf dem Mobilgerät gut sehen können, damit die Seite auf allen Geräten nutzbar ist.

## Implementation Decisions

**Karten-Layout:**
- Die `h2`-Überschrift „Kontakt" und das nachfolgende `p`-Element werden aus dem Sektions-Wrapper vor dem Grid entfernt.
- Beide Elemente werden als erstes Kind in die weiße Kontakt-Karte eingefügt, oberhalb der `ContactForm`-Komponente.
- Die Überschrift wird als `div` mit Label-Styling umgesetzt (kein `h2` mehr), da die semantische Rolle der Sektion bereits über `id="kontakt"` und die Seitenstruktur gewährleistet ist.
- Der Beschreibungstext wird als `p` mit gedämpfter Farbe (`text-zinc-600`, `text-sm`) direkt unter dem Label platziert.

**Google Maps Embed:**
- Einbettung über Standard-`<iframe>` ohne API-Key. Die Karte wird über eine öffentliche Google-Maps-URL mit `output=embed` eingebunden.
- Der `q`-Parameter enthält den vollständigen Namen "Dipl.-Ing. Ulrike Walter MEng Fachplanung Brandschutz, Ring am Feld 10, 14532 Kleinmachnow", damit Google Maps den Standort korrekt anzeigt.
- Zoom: Level 14 (Kleinmachnow im Überblick — Stadtteil gut erkennbar, Straße auffindbar).
- Position: Direkt unterhalb des 2-Spalten-Grids, noch innerhalb der roten Kontakt-Sektion (`#kontakt`), in voller Breite.
- Höhe: 400px fest; responsiv angepasst auf kleinen Bildschirmen.
- Styling: Abgerundete Ecken (`rounded-2xl`), subtiler Rahmen (`border border-white/15`) — einheitlich mit den bestehenden Karten.
- Kein eigenes Komponent — das iframe wird direkt in `page.tsx` eingefügt, da kein Client-State benötigt wird.
- `datenschutz/page.tsx` erhält einen neuen Abschnitt „Google Maps", der erklärt, dass beim Laden die IP-Adresse an Google LLC übertragen wird, die Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO) nennt und auf die Google-Datenschutzerklärung verlinkt.

## Testing Decisions

Manuelle Sichtprüfung im Browser — kein automatisiertes Testing vorgesehen (Projektkonvention).

Zu prüfen:
- Beide Karten starten auf Desktop und Mobile auf gleicher Höhe
- Beschreibungstext erscheint innerhalb der weißen Karte, oberhalb des Formulars
- Kein ungewollter vertikaler Abstand zwischen Label, Text und Formular
- Karte lädt korrekt und zeigt den Standort Kleinmachnow mit Pin
- Layout auf Desktop: Karte unterhalb des Grids, volle Breite, kein Overflow
- Layout auf Mobile: Karte skaliert korrekt, keine horizontale Scroll-Bar
- Klick auf die Karte öffnet Google Maps im Browser/App
- Datenschutzseite zeigt den neuen Google-Maps-Abschnitt

## Out of Scope

- Änderungen am Inhalt des Impressums
- Responsive-Verhalten der Kartenbreiten
- „Click to load"-Lösung (Karte erst nach Nutzerbestätigung laden)
- OpenStreetMap oder andere Kartenanbieter
- Google Maps JavaScript API oder Embed API mit API-Key
- Custom Marker / eigenes Icon
- Routen-Berechnung direkt auf der Website
- Karte auf anderen Unterseiten (Büro, Leistungen)

## Further Notes

- Vor dieser Änderung war `h2.Kontakt` ein freistehendes Sektions-Heading. Da `section#kontakt` weiterhin als Anker für den „Angebot anfordern"-Link im Hero dient, bleibt die Navigation funktional.
- Das Google Maps iframe überträgt beim Laden die IP-Adresse des Besuchers an Google LLC (USA) — deshalb ist der Datenschutz-Abschnitt notwendig.
- Das Label auf der Karte ist best-effort: Google Maps zeigt es nur prominent an, wenn der Ort als Google-Business-Eintrag registriert ist. Andernfalls erscheint der Adress-Pin ohne eigenes Label.
- Die Embed-URL kann direkt konstruiert werden: `https://maps.google.com/maps?q=...&output=embed&z=14`.
