/* Slovenko — optional Firebase cloud sync.
   If firebase-config.js is missing, the app simply runs in offline/local mode. */

const FIREBASE_CDN = "https://www.gstatic.com/firebasejs/10.12.2/";

const fb = { app: null, auth: null, db: null, user: null, ready: false };

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function initFirebase() {
  if (typeof firebaseConfig === "undefined") return false;
  try {
    await loadScript(FIREBASE_CDN + "firebase-app-compat.js");
    await loadScript(FIREBASE_CDN + "firebase-auth-compat.js");
    await loadScript(FIREBASE_CDN + "firebase-firestore-compat.js");
    fb.app = firebase.initializeApp(firebaseConfig);
    fb.auth = firebase.auth();
    fb.db = firebase.firestore();
    fb.ready = true;
    fb.auth.onAuthStateChanged(onAuthChange);
    return true;
  } catch (e) {
    console.warn("Firebase unavailable — running in offline mode.");
    return false;
  }
}

async function onAuthChange(user) {
  fb.user = user;
  if (user) {
    try {
      const snap = await fb.db.collection("users").doc(user.uid).get();
      if (snap.exists) {
        const d = snap.data();
        const p = store.profiles.find(x => x.uid === user.uid) || emptyProfile(d.name || "Learner", d.avatar || AVATARS[0]);
        Object.assign(p, {
          uid: user.uid, name: d.name || p.name, avatar: d.avatar || p.avatar,
          xp: d.xp || 0, streak: d.streak || 0, lastDate: d.lastDate || null,
          completed: d.completed || {}
        });
        if (!store.profiles.includes(p)) store.profiles.push(p);
        if (state && state.uid !== user.uid && (state.xp > (d.xp || 0) || Object.keys(state.completed).length > Object.keys(d.completed || {}).length)) {
          // Local profile has more progress than the cloud copy: upload it.
          p.xp = Math.max(p.xp, state.xp);
          p.completed = Object.assign({}, d.completed, state.completed);
          p.streak = Math.max(p.streak, state.streak);
          await syncCloud(p);
        }
        activateProfile(p.id);
        renderHome();
        showScreen("screen-home");
      } else if (state) {
        // No cloud doc yet: claim the current local profile for this account.
        state.uid = user.uid;
        saveStore();
        await syncCloud(state);
      }
    } catch (e) {
      console.warn("Cloud sync failed:", e.message);
    }
  }
  renderCloudBox();
}

async function syncCloud(profile) {
  if (!fb.ready || !fb.user || !profile) return;
  try {
    await fb.db.collection("users").doc(fb.user.uid).set({
      name: profile.name, avatar: profile.avatar,
      xp: profile.xp, streak: profile.streak, lastDate: profile.lastDate,
      completed: profile.completed, updatedAt: Date.now()
    }, { merge: true });
  } catch (e) {
    console.warn("Cloud sync failed:", e.message);
  }
}

function renderCloudBox() {
  const box = document.getElementById("cloud-box");
  if (!box) return;
  const btn = document.getElementById("btn-cloud");
  const form = document.getElementById("cloud-form");
  const userBox = document.getElementById("cloud-user");
  const configured = typeof firebaseConfig !== "undefined";
  if (!configured) {
    box.innerHTML = `<p class="cloud-note">☁️ Cloud sync is off — add <code>firebase-config.js</code> to enable accounts across devices.</p>`;
    return;
  }
  if (fb.user) {
    btn.classList.add("hidden");
    form.classList.add("hidden");
    userBox.classList.remove("hidden");
    document.getElementById("cloud-email-label").textContent = fb.user.email;
  } else {
    btn.classList.remove("hidden");
    userBox.classList.add("hidden");
  }
}

async function cloudSignIn(email, password) {
  await fb.auth.signInWithEmailAndPassword(email, password);
}

async function cloudSignUp(email, password) {
  const cred = await fb.auth.createUserWithEmailAndPassword(email, password);
  return cred;
}

async function cloudSignOut() {
  await fb.auth.signOut();
  renderProfiles();
  showScreen("screen-profiles");
}

window.SlovenkoCloud = {
  sync() { if (state) syncCloud(state); },
  get signedIn() { return !!fb.user; }
};

document.addEventListener("DOMContentLoaded", () => {
  initFirebase().then(renderCloudBox);
  const btn = document.getElementById("btn-cloud");
  const form = document.getElementById("cloud-form");
  if (btn) btn.addEventListener("click", () => form.classList.toggle("hidden"));
  const msg = document.getElementById("cloud-msg");
  const doAuth = async (fn) => {
    const email = document.getElementById("cloud-email").value.trim();
    const pass = document.getElementById("cloud-pass").value;
    msg.textContent = "";
    if (!email || pass.length < 6) { msg.textContent = "Enter an email and a password (min 6 chars)."; return; }
    try { await fn(email, pass); }
    catch (e) { msg.textContent = e.message.replace("Firebase: ", ""); }
  };
  document.getElementById("btn-signin").addEventListener("click", () => doAuth(cloudSignIn));
  document.getElementById("btn-signup").addEventListener("click", () => doAuth(cloudSignUp));
  document.getElementById("btn-signout").addEventListener("click", cloudSignOut);
});
