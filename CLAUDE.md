@AGENTS.md

# walter-brandschutz

Website für **Dipl.-Ing. Ulrike Walter MEng**, Ingenieurbüro für Brandschutzplanung, Kleinmachnow / Berlin. Statische Firmenpräsenz mit serverseitigem Kontaktformular.

## Architektur

Next.js App Router. Alle Seiten sind Server Components außer `ContactForm` (benötigt Client-State). Keine externe Datenbank — einzige Server-Logik ist der E-Mail-Versand in `src/app/api/contact/route.ts`.

```
src/
  app/
    page.tsx               # Startseite: Hero + Kontaktformular + Impressum (als Aside neben dem Formular)
    buero/page.tsx         # Büro-Seite: Inhaberin, Qualifikationen
    leistungen/page.tsx
    datenschutz/page.tsx   # Datenschutzerklärung (verlinkt im Footer)
    api/contact/route.ts   # POST-Handler: Validierung → Nodemailer
  components/
    Container.tsx     # Max-Width-Wrapper, wird überall genutzt
    Header.tsx        # Braune Navigationsleiste
    Footer.tsx        # Enthält Link zur Datenschutzseite
    ContactForm.tsx   # "use client" — Formular-State + fetch
```

**Kein separates Impressum** — das Impressum (§ 5 TMG) ist als `<aside>` direkt in `page.tsx` neben dem Kontaktformular eingebettet.

## Konventionen

**Komponenten:** Named exports, kein `default export` in Component-Files.

**Styling:** Tailwind-Utility-Klassen direkt im JSX. Keine `cn()`-Helper, keine CSS-Module. Farben als Hex-Literal wenn sie nicht im Tailwind-Standard sind (`#63544d`, `#b1353a`) — nicht in `tailwind.config` eintragen, da Tailwind v4 keinen klassischen Config-File nutzt.

**Farben:**
- `#63544d` — Braun: Header, Footer
- `#b1353a` — Rot: Seitenhintergrund (Büro, Leistungen), Kontakt-Sektion auf Startseite
- `zinc-950 / zinc-700` — Fließtext

**Karten-Überschriften:** Abschnittstitel innerhalb von Karten als kleines Label: `text-sm font-semibold uppercase tracking-[0.2em]`. Farbe je nach Hintergrund: `text-zinc-600` (weiß), `text-white/90` (rot).

**Sprache:** Alle UI-Texte auf Deutsch. Fehlermeldungen ebenfalls Deutsch.

**Keine Tests**, kein Storybook — das Projekt ist klein genug für manuelle Überprüfung.

## Kontaktformular

`ContactForm` → `POST /api/contact`

Schutzmaßnahmen im API-Handler:
- **Zod-Validierung** (`privacyOk: z.literal(true)` erzwingt Datenschutz-Checkbox)
- **Honeypot** — Feld `company` ist für Menschen versteckt; ausgefüllt → Request wird still ignoriert (gibt `{ ok: true }` zurück, um Bots nicht zu informieren). Kein CAPTCHA — bewusste Entscheidung, DSGVO-neutral und ausreichend für dieses Verkehrsaufkommen.
- **IP-Rate-Limit** — 10 Requests / 10 Minuten, In-Memory-Map (restartet bei Deploy). Kein Redis — eine Instanz, ausreichend für dieses Verkehrsaufkommen.

Nodemailer mit eigenem SMTP — kein Drittanbieter-Service, DSGVO-neutral und ausreichend für dieses Kontaktvolumen. SMTP-Config kommt ausschließlich aus Env-Variablen (nie hardcoden):
`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `SMTP_TO`

## Deployment

Docker Compose: `app` (Next.js auf Port 3000) + `caddy` (Reverse Proxy, automatisches TLS).  
Caddy leitet `:80` → `app:3000` weiter; TLS wird von Caddy selbst verwaltet, Next.js bekommt davon nichts mit.

Aktuell auf einem Raspberry Pi 3 gehostet, von außen per Portfreigabe erreichbar. Serverumzug nicht geplant.

Dockerfile: 3-Stage-Build (deps → build → runner), läuft als unprivilegierter `nextjs`-User.

Env-Variablen werden zur Laufzeit in den Container injiziert (nicht ins Image gebacken) — `.env.local` für lokale Entwicklung, Docker-Compose-`environment`-Block für Produktion.

## Lokale Entwicklung

```bash
npm run dev   # Turbopack, Port 3000
npm run build
npm run lint
```

Für E-Mail-Tests lokale SMTP-Variablen in `.env.local` setzen (siehe `.env.example`).
