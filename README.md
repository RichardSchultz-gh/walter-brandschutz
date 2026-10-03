## Projekt
Nachbau von `walter-brandschutz.de` als Next.js App Router Projekt (Self-Hosting), inkl. SMTP‑Kontaktformular.

## Lokal starten

```bash
cd walter-brandschutz
cp .env.example .env.local
npm install
npm run dev
```

Dann `http://localhost:3000` öffnen.

### SMTP Umgebungsvariablen
Benötigt für das Kontaktformular (`/api/contact`):

- `SMTP_HOST`
- `SMTP_PORT` (z.B. 587 oder 465)
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (z.B. `Fachplanung Brandschutz <no-reply@domain.tld>`)
- `SMTP_TO` (Zieladresse)

## Build/Start (ohne Docker)

```bash
npm run build
npm run start
```

## Self-Hosting mit Docker + Caddy (HTTPS)

1. Domain im `Caddyfile` ersetzen (aktuell Platzhalter `walter-brandschutz.example.com`) und E-Mail oben anpassen.
2. `.env` im Projektordner anlegen (am besten aus `.env.example`).
3. Starten:

```bash
docker compose up -d --build
```

Danach ist die Seite über deine Domain erreichbar; Caddy holt automatisch TLS‑Zertifikate, sobald DNS korrekt auf den Server zeigt.

