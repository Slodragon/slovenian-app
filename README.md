# Slovenko 🐿️ — Learn Slovenian

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

## Optional: cloud accounts (Firebase)

Local profiles work out of the box. To sync progress across devices with real
accounts (email + password), set up Firebase:

1. Create a free project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication → Email/Password** and create a **Firestore** database
3. Copy `firebase-config.example.js` to `firebase-config.js` and paste your web
   app config (the file is gitignored, so keys stay private)
4. Lock down Firestore with these rules so users can only touch their own data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Without `firebase-config.js` the app runs fully offline with local profiles only.

## Run

**Easiest (works on phones and from cloud drives):** open
`slovenian-app-single-file.html` — a single self-contained file with all CSS
and JS inlined. Regenerate it after edits with `node build-single-file.js`.

Or open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — screens and modals
- `styles.css` — Duolingo-style UI
- `lessons.js` — course content (`UNITS` array; add lessons/exercises here)
- `app.js` — lesson engine, multi-profile accounts, scoring, persistence
- `firebase-app.js` — optional Firebase sync (loaded only if configured)
- `slovenian-app-single-file.html` — self-contained build for phones/cloud drives
- `build-single-file.js` — regenerates the single-file build
