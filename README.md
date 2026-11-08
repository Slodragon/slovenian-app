# Slovenko 🦉 — Learn Slovenian

A Duolingo-style language-learning web app for Slovenian. No build step, no
dependencies — open `index.html` in any modern browser.

## Features

- **4 units, 12 lessons, 95 exercises** covering greetings, food & drink,
  people & family, and around-town vocabulary
- **5 exercise types**: multiple choice (EN→SL and SL→EN), fill-in-the-blank,
  word-bank sentence building, listening (speech synthesis, `sl-SI` voice),
  and matching pairs
- **Multi-profile accounts**: a "Who's learning?" picker lets different people
  on the same device each have their own profile (name + avatar) with fully
  separate XP, streak, and lesson progress (stored per profile in `localStorage`)
- **Game mechanics**: XP, daily streak, 5 hearts per lesson, progress bar,
  lesson path with locked/unlocked nodes
- **Grammar tips** per unit (genders, dual, cases, formal/informal address)
- Typing answers are graded leniently: case-, punctuation- and diacritic-insensitive

## Run

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — screens and modals
- `styles.css` — Duolingo-style UI
- `lessons.js` — course content (`UNITS` array; add lessons/exercises here)
- `app.js` — lesson engine, multi-profile accounts, scoring, persistence
