# EnglishProfi 🦊 — Englisch für Fortgeschrittene (B1+)

Eine Web-App auf **Deutsch**, mit der fortgeschrittene
Lernende (B1 und höher) **Englisch** aufpolieren: Register & Stil, Phrasal
Verbs, Idioms, Grammatik (Conditionals, Passiv, Indirekte Rede), Collocations,
false friends u.v.m. Keine Build-Abhängigkeiten — `index.html` direkt öffnen.

## Funktionen

- **28 Einheiten, 84 Lektionen, ~670 Übungen** — 4 handgeschriebene Einheiten
  plus 24 generierte Themen-Einheiten (Business, E-Mail, Umwelt, KI, Marketing…)
- **5 Übungstypen**: Multiple Choice (DE→EN und EN→DE), Lückentext,
  Wortbank-Sätze, Hörverstehen (englische Sprachausgabe, `en-GB`), Paare zuordnen
- **Mechanik**: XP, Tages-Serie, **unbegrenzte Leben**, Fortschrittsbalken,
  Lernpfad mit gesperrten Lektionen — gesperrte Lektion antippen zum
  **Vorspringen per Test**
- **Mehrere Profile** auf einem Gerät („Wer lernt gerade?“) mit getrenntem
  Fortschritt, gespeichert in `localStorage`
- **Optional: Firebase-Cloud-Sync** (Konten geräteübergreifend) — siehe
  `firebase-config.example.js`; ohne Konfiguration läuft die App offline
- Englische Eingaben werden tolerant bewertet (Groß-/Kleinschreibung,
  Satzzeichen, Akzente egal)

## Start

**Am einfachsten (Handy / Cloud):** `englishprofi-single-file.html` öffnen —
eine einzelne Datei mit allem Inline-Code. Neu generieren mit
`node build-single-file.js`.

Oder `index.html` direkt öffnen bzw. den Ordner serven:

```sh
python3 -m http.server 8000
# dann http://localhost:8000
```

## Dateien

- `index.html` — Oberflächen & Modals (deutsche UI)
- `styles.css` — UI-Design
- `lessons.js` — handgeschriebene B1+-Einheiten
- `content-gen.js` — deterministischer Generator für die Themen-Einheiten
- `app.js` — Lektionen-Engine, Profile, Wertung, Speicherung
- `firebase-app.js` — optionaler Firebase-Sync
- `englishprofi-single-file.html` — Selbst-contained Build
- `build-single-file.js` — regeneriert den Single-File-Build
