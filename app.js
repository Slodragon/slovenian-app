/* Slovenko — app logic (multi-profile) */

const STORE_KEY = "slovenko-profiles-v1";
const LEGACY_KEY = "slovenko-progress-v1";
const AVATARS = ["🦉", "🐸", "🦊", "🐼", "🦁", "🐯", "🐰", "🐨"];

function emptyProfile(name, avatar) {
  return { id: "p" + Date.now() + Math.random().toString(36).slice(2, 7),
           name: name || "Learner", avatar: avatar || AVATARS[0],
           xp: 0, streak: 0, lastDate: null, completed: {} };
}

function loadStore() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && Array.isArray(s.profiles)) return Object.assign({ profiles: [], activeId: null }, s);
  } catch (e) { /* fresh start */ }
  // Migrate the old single-player save into a first profile.
  try {
    const old = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (old && typeof old === "object" && (old.xp || old.completed)) {
      const p = emptyProfile("Learner", AVATARS[0]);
      Object.assign(p, { xp: old.xp || 0, streak: old.streak || 0, lastDate: old.lastDate || null, completed: old.completed || {} });
      localStorage.removeItem(LEGACY_KEY);
      return { profiles: [p], activeId: p.id };
    }
  } catch (e) { /* ignore */ }
  return { profiles: [], activeId: null };
}

function saveStore() {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

let store = loadStore();
let state = store.profiles.find(p => p.id === store.activeId) || null;

function activateProfile(id) {
  state = store.profiles.find(p => p.id === id) || null;
  store.activeId = id;
  saveStore();
  if (state) updateStreak();
}

// Streak: +1 if last activity was yesterday, reset if older, keep if today.
function updateStreak() {
  if (!state) return;
  const today = new Date().toDateString();
  if (state.lastDate === today) return;
  const y = new Date(Date.now() - 86400000).toDateString();
  state.streak = state.lastDate === y ? state.streak + 1 : 1;
  state.lastDate = today;
  saveStore();
}

/* ---------------- Profile picker screen ---------------- */

function renderProfiles() {
  const list = document.getElementById("profile-list");
  list.innerHTML = "";
  store.profiles.forEach(p => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `<div class="profile-avatar">${p.avatar}</div>
      <div class="profile-info"><b>${escapeHtml(p.name)}</b><span>⚡ ${p.xp} XP · 🔥 ${p.streak}</span></div>
      <button class="profile-del" title="Delete profile">✕</button>`;
    card.querySelector(".profile-del").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!confirm(`Delete ${p.name}'s profile and all progress?`)) return;
      store.profiles = store.profiles.filter(x => x.id !== p.id);
      if (store.activeId === p.id) { store.activeId = null; state = null; }
      saveStore();
      renderProfiles();
    });
    card.addEventListener("click", () => {
      activateProfile(p.id);
      renderHome();
      showScreen("screen-home");
    });
    list.appendChild(card);
  });
  document.getElementById("btn-add-profile").classList.toggle("hidden", false);
  document.getElementById("profile-create").classList.add("hidden");
  const avRow = document.getElementById("avatar-row");
  avRow.innerHTML = "";
  AVATARS.forEach((a, i) => {
    const b = document.createElement("button");
    b.className = "avatar-opt" + (i === 0 ? " selected" : "");
    b.textContent = a;
    b.addEventListener("click", () => {
      avRow.querySelectorAll(".avatar-opt").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
    });
    avRow.appendChild(b);
  });
}

function createProfile() {
  const name = document.getElementById("profile-name").value.trim().slice(0, 16);
  const sel = document.querySelector("#avatar-row .avatar-opt.selected");
  const p = emptyProfile(name || "Learner", sel ? sel.textContent : AVATARS[0]);
  store.profiles.push(p);
  saveStore();
  activateProfile(p.id);
  document.getElementById("profile-name").value = "";
  renderHome();
  showScreen("screen-home");
}

/* ---------------- Home screen ---------------- */

function isUnlocked(lessonId) {
  const all = [];
  for (const u of UNITS) for (const l of u.lessons) all.push(l.id);
  const i = all.indexOf(lessonId);
  return i === 0 || !!(state && state.completed[all[i - 1]]);
}

function renderHome() {
  if (!state) { renderProfiles(); showScreen("screen-profiles"); return; }
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("profile-chip-avatar").textContent = state.avatar;
  document.getElementById("profile-chip-name").textContent = state.name;
  const wrap = document.getElementById("units");
  wrap.innerHTML = "";
  const icons = ["👋", "🍽️", "👨‍👩‍👧", "🗺️"];
  UNITS.forEach((u, ui) => {
    const sec = document.createElement("div");
    sec.className = "unit";
    sec.innerHTML = `
      <div class="unit-header" style="background:${u.color}">
        <div class="uicon">${icons[ui] || "📘"}</div>
        <div><h2>${u.title}</h2><p>${u.description}</p></div>
      </div>
      <div class="path"></div>
      <div class="tip-box"><b>Grammar tip:</b> ${u.tip}</div>`;
    const path = sec.querySelector(".path");
    u.lessons.forEach((l, li) => {
      const done = !!state.completed[l.id];
      const unlocked = isUnlocked(l.id);
      const nodeWrap = document.createElement("div");
      nodeWrap.className = "node-wrap";
      nodeWrap.style.transform = `translateX(${li % 2 === 0 ? -34 : 34}px)`;
      const btn = document.createElement("button");
      btn.className = "lesson-node" + (done ? " done" : "") + (!unlocked ? " locked" : "");
      btn.style.background = unlocked ? u.color : "";
      btn.textContent = done ? "★" : unlocked ? "▶" : "🔒";
      btn.title = l.title;
      if (unlocked) btn.addEventListener("click", () => startLesson(l.id));
      const label = document.createElement("div");
      label.className = "node-label";
      label.textContent = l.title;
      nodeWrap.appendChild(btn);
      nodeWrap.appendChild(label);
      path.appendChild(nodeWrap);
    });
    wrap.appendChild(sec);
  });
}

/* ---------------- Lesson engine ---------------- */

let session = null;

function startLesson(id) {
  const found = findLesson(id);
  if (!found || !state) return;
  session = {
    lesson: found.lesson, unit: found.unit,
    index: 0, hearts: 5, earned: 0, correct: 0, answered: 0,
    selection: null, words: [], typed: "", matched: new Set(), matchSel: null
  };
  document.getElementById("lesson-title").textContent = found.lesson.title;
  document.getElementById("lesson-tip").textContent = "";
  showScreen("screen-lesson");
  renderExercise();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalize(s) {
  return (s || "").toLowerCase().trim().replace(/\s+/g, " ")
    .replace(/[.!?,;:]+$/g, "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function speak(text) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "sl-SI";
    u.rate = 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (e) { /* speech not available */ }
}

function renderExercise() {
  const ex = session.lesson.exercises[session.index];
  const total = session.lesson.exercises.length;
  document.getElementById("progress-fill").style.width = (session.index / total * 100) + "%";
  document.getElementById("stat-hearts").textContent = session.hearts;
  document.getElementById("lesson-tip").textContent = `${session.index + 1} / ${total}`;

  session.selection = null; session.words = []; session.typed = "";
  session.matched = new Set(); session.matchSel = null;

  const area = document.getElementById("exercise-area");
  const footer = document.getElementById("lesson-footer");
  footer.classList.remove("hidden");
  document.getElementById("feedback").textContent = "";
  const btn = document.getElementById("btn-check");
  btn.disabled = true;
  btn.textContent = session.index === total - 1 ? "FINISH" : "CHECK";

  area.innerHTML = "";
  if (ex.type === "choice" || ex.type === "fill") renderChoice(area, ex);
  else if (ex.type === "words") renderWords(area, ex);
  else if (ex.type === "listen") renderListen(area, ex);
  else if (ex.type === "match") renderMatch(area, ex);
}

function dirTag(ex) {
  if (ex.dir === "en-sl") return '<span class="dir-tag">EN → SL</span>';
  if (ex.dir === "sl-en") return '<span class="dir-tag">SL → EN</span>';
  return "";
}

function renderChoice(area, ex) {
  let html = `<div class="ex-prompt">${dirTag(ex)}${ex.type === "fill" ? "" : escapeHtml(ex.prompt)}</div>`;
  if (ex.type === "fill") {
    const parts = ex.sentence.split("___");
    html = `<div class="fill-sentence">${escapeHtml(parts[0])}<span class="blank" id="fill-blank">&nbsp;</span>${escapeHtml(parts[1])}</div>
            <div class="ex-hint">${escapeHtml(ex.gloss)}</div>`;
  }
  html += `<div class="options">` + shuffle(ex.options).map((o) =>
    `<button class="opt-btn" data-val="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join("") + `</div>`;
  area.innerHTML = html;
  area.querySelectorAll(".opt-btn").forEach(b => b.addEventListener("click", () => {
    area.querySelectorAll(".opt-btn").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    session.selection = b.dataset.val;
    if (ex.type === "fill") document.getElementById("fill-blank").textContent = b.dataset.val;
    document.getElementById("btn-check").disabled = false;
  }));
}

function renderWords(area, ex) {
  area.innerHTML = `
    <div class="ex-prompt">${dirTag(ex)}${escapeHtml(ex.prompt)}</div>
    <div class="answer-area" id="answer-area"></div>
    <div class="wordbank" id="wordbank"></div>`;
  const bank = document.getElementById("wordbank");
  shuffle(ex.bank).forEach((w, i) => {
    const c = document.createElement("button");
    c.className = "word-chip";
    c.textContent = w;
    c.dataset.idx = i;
    c.addEventListener("click", () => {
      session.words.push({ w, idx: i });
      c.classList.add("used");
      drawAnswer();
      document.getElementById("btn-check").disabled = session.words.length === 0;
    });
    bank.appendChild(c);
  });
  function drawAnswer() {
    const aa = document.getElementById("answer-area");
    aa.innerHTML = "";
    session.words.forEach((item, pos) => {
      const c = document.createElement("button");
      c.className = "word-chip in-answer";
      c.textContent = item.w;
      c.addEventListener("click", () => {
        session.words.splice(pos, 1);
        bank.querySelector(`[data-idx="${item.idx}"]`).classList.remove("used");
        drawAnswer();
        document.getElementById("btn-check").disabled = session.words.length === 0;
      });
      aa.appendChild(c);
    });
  }
}

function renderListen(area, ex) {
  area.innerHTML = `
    <div class="ex-prompt">${escapeHtml(ex.prompt)}</div>
    <div class="listen-row">
      <button class="speaker-btn" id="btn-speak" title="Play audio">🔊</button>
      <input class="text-input" id="listen-input" type="text" placeholder="Type what you hear…" autocomplete="off">
    </div>
    ${ex.hint ? `<div class="ex-hint">Hint: ${escapeHtml(ex.hint)}</div>` : ""}`;
  const input = document.getElementById("listen-input");
  document.getElementById("btn-speak").addEventListener("click", () => speak(ex.answer));
  input.addEventListener("input", () => {
    session.typed = input.value;
    document.getElementById("btn-check").disabled = input.value.trim() === "";
  });
  setTimeout(() => speak(ex.answer), 350);
}

function renderMatch(area, ex) {
  area.innerHTML = `<div class="ex-prompt">${escapeHtml(ex.prompt)}</div><div class="match-grid" id="match-grid"></div>
    <div class="ex-hint" id="match-status">0 / ${ex.pairs.length} matched</div>`;
  const grid = document.getElementById("match-grid");
  const left = shuffle(ex.pairs.map((p, i) => ({ label: p[0], id: i })));
  const right = shuffle(ex.pairs.map((p, i) => ({ label: p[1], id: i })));
  const cells = shuffle([...left.map(c => ({ ...c, side: "L" })), ...right.map(c => ({ ...c, side: "R" }))]);
  cells.forEach(c => {
    const b = document.createElement("button");
    b.className = "match-btn";
    b.textContent = c.label;
    b.dataset.side = c.side;
    b.dataset.id = c.id;
    b.addEventListener("click", () => {
      if (session.matched.has(c.id) || b.classList.contains("selected")) return;
      if (session.matchSel) {
        const prev = grid.querySelector(`[data-side="${session.matchSel.side}"][data-id="${session.matchSel.id}"]`);
        if (prev) prev.classList.remove("selected");
      }
      if (session.matchSel && session.matchSel.side !== c.side) {
        if (session.matchSel.id === c.id) {
          session.matched.add(c.id);
          b.classList.add("matched");
          grid.querySelector(`[data-side="${session.matchSel.side}"][data-id="${c.id}"]`).classList.add("matched");
          session.matchSel = null;
          document.getElementById("match-status").textContent = `${session.matched.size} / ${ex.pairs.length} matched`;
          if (session.matched.size === ex.pairs.length) document.getElementById("btn-check").disabled = false;
        } else {
          session.matchSel = { side: c.side, id: c.id };
          b.classList.add("selected");
        }
      } else {
        session.matchSel = { side: c.side, id: c.id };
        b.classList.add("selected");
      }
    });
    grid.appendChild(b);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------------- Checking ---------------- */

function currentAnswer() {
  const ex = session.lesson.exercises[session.index];
  if (ex.type === "choice" || ex.type === "fill") return session.selection;
  if (ex.type === "words") return session.words.map(x => x.w).join(" ");
  if (ex.type === "listen") return session.typed;
  if (ex.type === "match") return session.matched.size === ex.pairs.length ? "__matched__" : "";
  return "";
}

function checkAnswer() {
  const ex = session.lesson.exercises[session.index];
  const given = currentAnswer();
  const ok = ex.type === "match" ? given === "__matched__" : normalize(given) === normalize(ex.answer);
  session.answered++;
  if (ok) {
    session.correct++;
    session.earned += 10;
    showResult(true, ex);
  } else {
    session.hearts--;
    document.getElementById("stat-hearts").textContent = session.hearts;
    showResult(false, ex);
    if (session.hearts <= 0) setTimeout(showFailed, 1400);
  }
  document.getElementById("progress-fill").style.width = ((session.index + 1) / session.lesson.exercises.length * 100) + "%";
}

function showResult(ok, ex) {
  const modal = document.getElementById("modal-result");
  const body = document.getElementById("modal-body");
  body.className = "modal-body " + (ok ? "good" : "bad");
  body.innerHTML = ok
    ? `<h1>Correct!</h1><p>+10 XP</p>`
    : `<h1>Not quite…</h1><p class="correct-answer">Correct answer: <b>${escapeHtml(ex.answer)}</b></p>`;
  modal.classList.remove("hidden");
}

function nextExercise() {
  document.getElementById("modal-result").classList.add("hidden");
  session.index++;
  if (session.index >= session.lesson.exercises.length) finishLesson();
  else renderExercise();
}

function finishLesson() {
  const id = session.lesson.id;
  state.completed[id] = Math.max(state.completed[id] || 0, session.earned);
  state.xp += session.earned;
  saveStore();
  showScreen("screen-complete");
  document.getElementById("complete-xp").textContent = session.earned;
  const acc = session.answered ? Math.round(session.correct / session.answered * 100) : 100;
  document.getElementById("complete-acc").textContent = acc + "%";
  document.getElementById("complete-sub").textContent =
    `${session.lesson.title} — ${state.name} earned ${session.earned} XP!`;
  session = null;
}

function showFailed() {
  document.getElementById("modal-result").classList.add("hidden");
  document.getElementById("modal-failed").classList.remove("hidden");
}

/* ---------------- Wiring ---------------- */

document.getElementById("btn-check").addEventListener("click", checkAnswer);
document.getElementById("btn-modal-next").addEventListener("click", nextExercise);
document.getElementById("btn-continue").addEventListener("click", () => { renderHome(); showScreen("screen-home"); });
document.getElementById("btn-retry").addEventListener("click", () => {
  document.getElementById("modal-failed").classList.add("hidden");
  startLesson(session.lesson.id);
});
document.getElementById("btn-exit").addEventListener("click", () => {
  document.getElementById("modal-failed").classList.add("hidden");
  session = null;
  renderHome();
  showScreen("screen-home");
});
document.getElementById("btn-quit").addEventListener("click", () => {
  session = null;
  renderHome();
  showScreen("screen-home");
});
document.getElementById("btn-switch-profile").addEventListener("click", () => {
  session = null;
  renderProfiles();
  showScreen("screen-profiles");
});
document.getElementById("btn-add-profile").addEventListener("click", () => {
  document.getElementById("profile-create").classList.remove("hidden");
  document.getElementById("profile-name").focus();
});
document.getElementById("btn-create-profile").addEventListener("click", createProfile);
document.getElementById("profile-name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") createProfile();
});

/* ---------------- Boot ---------------- */

if (state) { updateStreak(); renderHome(); showScreen("screen-home"); }
else { renderProfiles(); showScreen("screen-profiles"); }
