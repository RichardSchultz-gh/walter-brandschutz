# PRD: Einheitliche Karten-Überschriften

## Problem Statement

Die Überschriften der Kontakt- und Impressum-Karte hatten unterschiedliche Stile: „Kontakt" war als großes `h2` (`text-2xl`) formatiert, „Impressum" als kleines gedämpftes Label (`text-xs`, niedrige Opacity). Zudem war „Impressum" kaum lesbar, da die Schriftgröße zu klein und die Farbe zu blass war.

## Solution

Beide Karten-Überschriften auf einen einheitlichen Label-Stil bringen und die Lesbarkeit verbessern: größere Schrift, höhere Opacity — angepasst an den jeweiligen Kartenhintergrund.

## User Stories

1. Als Besucherin der Website möchte ich, dass Kontakt und Impressum optisch gleichwertige Überschriften haben, damit die Seite einheitlich und professionell wirkt.
2. Als Besucherin möchte ich die Karten-Überschriften auf Anhieb lesen können, damit ich sofort erkenne, welcher Bereich was enthält.

## Implementation Decisions

- Beide Überschriften nutzen denselben Basis-Stil: `text-sm font-semibold uppercase tracking-[0.2em]`
- Farbe wird je nach Kartenhintergrund angepasst:
  - Weiße Karte (Kontakt): `text-zinc-600`
  - Rote Karte (Impressum): `text-white/90`
- Wechsel von `text-xs` auf `text-sm` für bessere Lesbarkeit
- Opacity erhöht: von `text-zinc-400` / `text-white/60` auf `text-zinc-600` / `text-white/90`

## Testing Decisions

Manuelle Sichtprüfung im Browser — kein automatisiertes Testing vorgesehen (Projektkonvention).

Zu prüfen:
- Beide Überschriften haben auf Desktop und Mobile gleiches visuelles Gewicht
- Überschriften sind auf ihrem jeweiligen Hintergrund gut lesbar
- Kein Kontrast-Problem mit dem roten Hintergrund (WCAG AA)

## Out of Scope

- Änderungen an Überschriften auf anderen Seiten (Büro, Leistungen, Datenschutz)
- Änderungen an der Typografie des Fließtexts innerhalb der Karten

## Further Notes

Die Konvention für Karten-Überschriften ist in `CLAUDE.md` unter „Karten-Überschriften" dokumentiert, damit künftige Karten-Elemente direkt den richtigen Stil verwenden.
