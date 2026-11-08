/* EnglishProfi — generated advanced (B1+) topic units.
   Format: words [[english, german], ...], sentences [[english, german], ...].
   Deterministic: same seed -> same lessons. */

const TOPICS = [
  { name: "Business English", tip: "Geschäftsenglisch ist höflich und präzise: „Could you…?“ statt „You must…“.",
    words: [["deadline","Frist"],["meeting","Besprechung"],["agenda","Tagesordnung"],["to circulate","in Umlauf bringen"],["stakeholder","Projektbeteiligter"],["to liaise","vermitteln / koordinieren"],["action item","Aufgabenpunkt"],["ballpark figure","ungefähre Größenordnung"],["to follow up","nachfassen"],["bottom line","Endergebnis / Kernpunkt"]],
    sentences: [["Let's schedule a meeting.","Lass uns eine Besprechung planen."],["I'll circulate the agenda tomorrow.","Ich bringe die Tagesordnung morgen in Umlauf."],["What's the bottom line?","Was ist das Endergebnis?"]] },
  { name: "E-Mail etiquette", tip: "„Dear Sir or Madam“ = sehr förmlich; „Hi team“ = locker; „Kind regards“ = freundlicher Gruß.",
    words: [["attachment","Anhang"],["to get back to someone","sich bei jemandem melden"],["further to your email","bezugnehmend auf Ihre E-Mail"],["as discussed","wie besprochen"],["please find attached","siehe Anhang"],["looking forward to","ich freue mich auf"],["cc / bcc","Kopie / Blindkopie"]],
    sentences: [["Please find attached the report.","Im Anhang finden Sie den Bericht."],["I'll get back to you by Friday.","Ich melde mich bis Freitag bei Ihnen."],["As discussed, we'll start in May.","Wie besprochen starten wir im Mai."]] },
  { name: "Academic English", tip: "Akademisches Englisch vermeidet „very“ — nutze „extremely“, „highly“, „particularly“.",
    words: [["to argue","argumentieren / behaupten"],["evidence","Belege / Nachweis"],["peer-reviewed","von Experten geprüft"],["hypothesis","Hypothese"],["to conduct a study","eine Studie durchführen"],["significant","signifikant / bedeutsam"],["to emphasise","betonen"],["drawback","Nachteil"],["nevertheless","nichtsdestotrotz"],["thus","daher / folglich"]],
    sentences: [["The evidence suggests that…","Die Belege legen nahe, dass…"],["This study was peer-reviewed.","Diese Studie wurde von Experten geprüft."],["Nevertheless, the results are clear.","Nichtsdestotrotz sind die Ergebnisse klar."]] },
  { name: "Travel & airports", tip: "„Check in“ = einchecken; „boarding pass“ = Bordkarte; „excess luggage“ = Übergepäck.",
    words: [["boarding pass","Bordkarte"],["check-in","Check-in / Einchecken"],["baggage claim","Gepäckausgabe"],["customs","Zoll"],["connecting flight","Anschlussflug"],["delay","Verspätung"],["jet lag","Jetlag"],["aisle seat","Gangplatz"],["window seat","Fensterplatz"],["carry-on","Handgepäck"]],
    sentences: [["Our flight has been delayed.","Unser Flug hat Verspätung."],["Where is the baggage claim?","Wo ist die Gepäckausgabe?"],["I'd like an aisle seat, please.","Ich hätte gerne einen Gangplatz."]] },
  { name: "Health & wellbeing", tip: "„I'm under the weather“ = umgangssprachlich für „ich fühle mich krank“.",
    words: [["workout","Training"],["to be worn out","erschöpft sein"],["mental health","psychische Gesundheit"],["to burn out","ausbrennen"],["resilience","Widerstandsfähigkeit"],["mindfulness","Achtsamkeit"],["to recover","sich erholen"],["vaccination","Impfung"],["side effects","Nebenwirkungen"],["prescription","Rezept (medizinisch)"]],
    sentences: [["I've been feeling worn out lately.","Ich fühle mich in letzter Zeit erschöpft."],["Exercise improves mental health.","Sport verbessert die psychische Gesundheit."],["Take time to recover.","Nimm dir Zeit, dich zu erholen."]] },
  { name: "Environment & climate", tip: "„Carbon footprint“ = CO₂-Fußabdruck; „renewable energy“ = erneuerbare Energien.",
    words: [["carbon footprint","CO₂-Fußabdruck"],["renewable energy","erneuerbare Energie"],["sustainable","nachhaltig"],["to emit","ausstoßen"],["greenhouse gases","Treibhausgase"],["biodiversity","Artenvielfalt"],["to phase out","auslaufen lassen"],["deforestation","Abholzung"],["circular economy","Kreislaufwirtschaft"],["net zero","Netto-Null"]],
    sentences: [["We must reduce our carbon footprint.","Wir müssen unseren CO₂-Fußabdruck verringern."],["Solar power is a renewable energy.","Solarenergie ist erneuerbar."],["The species is threatened by deforestation.","Die Art ist durch Abholzung bedroht."]] },
  { name: "Technology & AI", tip: "„Machine learning“ = maschinelles Lernen; „algorithm“ = Algorithmus.",
    words: [["artificial intelligence","künstliche Intelligenz"],["machine learning","maschinelles Lernen"],["algorithm","Algorithmus"],["to leak data","Daten leaken"],["cybersecurity","Cybersicherheit"],["cloud computing","Cloud-Computing"],["to update","aktualisieren"],["to crash","abstürzen"],["user-friendly","benutzerfreundlich"],["to hack","hacken"]],
    sentences: [["AI is changing the way we work.","KI verändert unsere Arbeitsweise."],["Please update your app.","Bitte aktualisiere deine App."],["The system crashed last night.","Das System ist letzte Nacht abgestürzt."]] },
  { name: "Media & news", tip: "„Headline“ = Schlagzeile; „to broadcast“ = senden / übertragen.",
    words: [["headline","Schlagzeile"],["to broadcast","senden / übertragen"],["bias","Voreingenommenheit"],["source","Quelle"],["to verify","überprüfen / verifizieren"],["misinformation","Desinformation"],["press freedom","Pressefreiheit"],["to cover a story","über ein Thema berichten"],["viral","viral / massenhaft verbreitet"],["subscription","Abonnement"]],
    sentences: [["Don't believe every headline.","Glaub nicht jeder Schlagzeile."],["Always verify your sources.","Überprüfe immer deine Quellen."],["The video went viral.","Das Video ging viral."]] },
  { name: "Education", tip: "„Tuition fees“ = Studiengebühren; „scholarship“ = Stipendium.",
    words: [["tuition fees","Studiengebühren"],["scholarship","Stipendium"],["lecture","Vorlesung"],["seminar","Seminar"],["thesis","Abschlussarbeit"],["to enrol","sich einschreiben"],["curriculum","Lehrplan"],["deadline","Abgabefrist"],["to graduate","den Abschluss machen"],["lifelong learning","lebenslanges Lernen"]],
    sentences: [["She won a scholarship to study abroad.","Sie bekam ein Stipendium fürs Auslandsstudium."],["The lecture starts at nine.","Die Vorlesung beginnt um neun."],["I graduate next summer.","Ich mache nächsten Sommer meinen Abschluss."]] },
  { name: "Social issues", tip: "„Equality“ = Gleichheit; „to discriminate against“ = benachteiligen.",
    words: [["equality","Gleichberechtigung"],["discrimination","Diskriminierung"],["to marginalise","an den Rand drängen"],["poverty","Armut"],["homelessness","Obdachlosigkeit"],["integration","Integration"],["diversity","Vielfalt"],["to advocate for","sich einsetzen für"],["inequality","Ungleichheit"],["welfare state","Sozialstaat"]],
    sentences: [["Diversity makes our society stronger.","Vielfalt macht unsere Gesellschaft stärker."],["We must fight inequality.","Wir müssen Ungleichheit bekämpfen."],["Everyone deserves equal opportunities.","Jeder verdient gleiche Chancen."]] },
  { name: "Science", tip: "„Peer review“ = kollegiale Begutachtung vor Veröffentlichung.",
    words: [["experiment","Experiment"],["peer review","kollegiale Begutachtung"],["to observe","beobachten"],["data","Daten"],["to analyse","analysieren"],["conclusion","Schlussfolgerung"],["reliable","zuverlässig"],["to replicate","replizieren / wiederholen"],["breakthrough","Durchbruch"],["hypothesis","Hypothese"]],
    sentences: [["The experiment was a success.","Das Experiment war ein Erfolg."],["We analysed the data carefully.","Wir haben die Daten sorgfältig analysiert."],["This is a major breakthrough.","Das ist ein bedeutender Durchbruch."]] },
  { name: "Food & dining out", tip: "„Bill“ = Rechnung (USA), „check“ = Rechnung (UK/USA); „starter“ = Vorspeise.",
    words: [["starter","Vorspeise"],["main course","Hauptgericht"],["dessert","Nachtisch"],["the bill / the check","die Rechnung"],["to tip","Trinkgeld geben"],["rare / medium / well done","blutig / medium / durch"],["tasting menu","Degustationsmenü"],["vegan","vegan"],["to book a table","einen Tisch reservieren"],["leftovers","Reste"]],
    sentences: [["Could we have the bill, please?","Könnten wir bitte die Rechnung haben?"],["I'd like my steak medium, please.","Ich hätte das Steak gerne medium."],["Can we book a table for four?","Können wir einen Tisch für vier reservieren?"]] },
  { name: "Money & finance", tip: "„Stock market“ = Börse; „interest rate“ = Zinssatz; „budget“ = Haushalt / Budget.",
    words: [["stock market","Börse"],["interest rate","Zinssatz"],["inflation","Inflation"],["budget","Budget"],["savings","Ersparnisse"],["loan","Kredit / Darlehen"],["to invest","investieren"],["shares","Aktien"],["tax","Steuer"],["currency","Währung"]],
    sentences: [["Interest rates are rising.","Die Zinssätze steigen."],["I need to make a budget.","Ich muss ein Budget erstellen."],["She invests in shares.","Sie investiert in Aktien."]] },
  { name: "Law & politics", tip: "„Bill“ = Gesetzesentwurf (USA); „to pass a law“ = ein Gesetz verabschieden.",
    words: [["law","Gesetz"],["to pass a law","ein Gesetz verabschieden"],["court","Gericht"],["trial","Gerichtsverfahren"],["witness","Zeuge"],["evidence","Beweismittel"],["verdict","Urteil"],["to sue","verklagen"],["human rights","Menschenrechte"],["election","Wahl"]],
    sentences: [["The court delivered its verdict.","Das Gericht verkündete sein Urteil."],["They won the trial.","Sie gewannen den Prozess."],["Everyone has basic human rights.","Jeder hat grundlegende Menschenrechte."]] },
  { name: "Psychology", tip: "„Cognitive bias“ = kognitiver Fehler / Wahrnehmungsverzerrung.",
    words: [["cognitive bias","kognitive Verzerrung"],["conscious","bewusst"],["unconscious","unbewusst"],["to cope with","mit etwas umgehen / fertigwerden"],["resilience","Resilienz"],["self-esteem","Selbstwertgefühl"],["anxiety","Angst / Besorgnis"],["to perceive","wahrnehmen"],["behaviour","Verhalten"],["trigger","Auslöser"]],
    sentences: [["Anxiety can be triggered by stress.","Angst kann durch Stress ausgelöst werden."],["Building resilience takes time.","Resilienz aufzubauen braucht Zeit."],["How do you cope with pressure?","Wie gehst du mit Druck um?"]] },
  { name: "Marketing", tip: "„Target audience“ = Zielgruppe; „brand awareness“ = Markenbekanntheit.",
    words: [["target audience","Zielgruppe"],["brand awareness","Markenbekanntheit"],["campaign","Kampagne"],["slogan","Werbespruch"],["to launch a product","ein Produkt auf den Markt bringen"],["USP (unique selling point)"," Alleinstellungsmerkmal"],["market research","Marktforschung"],["to persuade","überzeugen"],["catchy","einprägsam"],["word of mouth","Mundpropaganda"]],
    sentences: [["Our target audience is young professionals.","Unsere Zielgruppe sind junge Berufstätige."],["The slogan was very catchy.","Der Werbespruch war sehr einprägsam."],["We launched the product last week.","Wir brachten das Produkt letzte Woche auf den Markt."]] },
  { name: "Remote work", tip: "„Work-life balance“ = Work-Life-Balance; „to commute“ = pendeln.",
    words: [["remote work","Remote-Arbeit / Homeoffice"],["to commute","pendeln"],["work-life balance","Work-Life-Balance"],["video call","Videokonferenz"],["to mute","stumm schalten"],["time zone","Zeitzone"],["hybrid work","hybride Arbeit"],["to log off","sich abmelden"],["availability","Erreichbarkeit"],["to delegate","delegieren"]],
    sentences: [["Remote work improves work-life balance.","Remote-Arbeit verbessert die Work-Life-Balance."],["Let's schedule a video call.","Lass uns eine Videokonferenz planen."],["Please mute yourself during the call.","Bitte schalte dich während des Anrufs stumm."]] },
  { name: "Presentations", tip: "„To sum up“ = zusammenfassend; „in conclusion“ = abschließend.",
    words: [["slide","Folie"],["to sum up","zusammenfassend"],["in conclusion","abschließend"],["audience","Publikum / Zuhörer"],["to emphasise a point","einen Punkt betonen"],["Q&A (questions & answers)","Frage-und-Antwort-Runde"],["to engage the audience","das Publikum einbinden"],["key takeaway","Kernbotschaft"],["handout","Handout / Handzettel"],["to rehearse","proben"]],
    sentences: [["Let me sum up the main points.","Lass mich die Hauptpunkte zusammenfassen."],["Any questions before we conclude?","Noch Fragen, bevor wir abschließen?"],["She rehearsed her talk twice.","Sie probte ihren Vortrag zweimal."]] },
  { name: "Negotiation", tip: "„Win-win situation“ = Situation mit Vorteilen für beide Seiten.",
    words: [["negotiation","Verhandlung"],["win-win situation","Win-win-Situation"],["compromise","Kompromiss"],["terms and conditions","Allgemeine Geschäftsbedingungen"],["to haggle","feilschen"],["counter-offer","Gegenangebot"],["deadline","Frist"],["agreement","Vereinbarung"],["to concede","einräumen / nachgeben"],["leverage","Verhandlungsmacht"]],
    sentences: [["We reached a win-win agreement.","Wir erzielten eine Win-win-Vereinbarung."],["I can't accept these terms.","Diese Bedingungen kann ich nicht akzeptieren."],["Let me make a counter-offer.","Lass mich ein Gegenangebot machen."]] },
  { name: "Small talk", tip: "Small Talk dreht sich um harmlose Themen: Wetter, Wochenende, Hobbys — nie um Geld, Politik, Religion.",
    words: [["small talk","Smalltalk / oberflächliches Gespräch"],["how's it going?","wie läuft's?"],["have a good one","mach's gut / schönen Tag noch"],["no worries","schon gut / kein Problem"],["fair enough","in Ordnung / einverstanden"],["you're kidding","du machst Witze"],["I hear you","ich verstehe dich"],["speaking of which","apropos"],["by the way","übrigens"],["long time no see","lange nicht gesehen"]],
    sentences: [["Long time no see! How's it going?","Lange nicht gesehen! Wie läuft's?"],["Have a good one! See you around.","Mach's gut! Bis dann."],["By the way, did you see the game?","Übrigens, hast du das Spiel gesehen?"]] },
  { name: "Collocations", tip: "Collocations sind feste Wortpaare: „make a decision“ (nicht „do a decision“), „heavy rain“ (nicht „strong rain“).",
    words: [["make a decision","eine Entscheidung treffen"],["heavy rain","starker Regen"],["strong coffee","starker Kaffee"],["do homework","Hausaufgaben machen"],["take a photo","ein Foto machen"],["pay attention","aufpassen"],["break the rules","Regeln brechen"],["raise awareness","Bewusstsein schärfen"],["achieve a goal","ein Ziel erreichen"],["make progress","Fortschritte machen"]],
    sentences: [["We need to make a decision by Friday.","Wir müssen bis Freitag eine Entscheidung treffen."],["There was heavy rain all night.","Es gab die ganze Nacht starken Regen."],["Pay attention to the details!","Achte auf die Details!"]] },
  { name: "Word formation", tip: "Präfixe & Suffixe: „un-“, „re-“, „-less“, „-ful“, „-ness“. „Happiness“ = Glück (happy + ness).",
    words: [["unhappy","unglücklich"],["rewrite","neu schreiben"],["hopeless","hoffnungslos"],["careful","sorgfältig / vorsichtig"],["happiness","Glück"],["childhood","Kindheit"],["to strengthen","stärken"],["to lengthen","verlängern"],["worthless","wertlos"],["to broaden","erweitern"]],
    sentences: [["Happiness is more important than money.","Glück ist wichtiger als Geld."],["We need to strengthen our team.","Wir müssen unser Team stärken."],["The film broadened my perspective.","Der Film erweiterte meinen Horizont."]] },
  { name: "Discourse markers", tip: "Verbindungswörter strukturieren Texte: „however“ (jedoch), „therefore“ (daher), „on the other hand“ (andererseits).",
    words: [["however","jedoch / allerdings"],["therefore","daher / deshalb"],["on the other hand","andererseits"],["in addition","außerdem / zusätzlich"],["as a result","als Folge / infolgedessen"],["moreover","überdies / außerdem"],["in contrast","im Gegensatz dazu"],["consequently","folglich"],["to illustrate","um es zu veranschaulichen"],["in short","kurz gesagt"]],
    sentences: [["It rained; however, we still went out.","Es regnete; jedoch gingen wir trotzdem raus."],["He studied hard; as a result, he passed.","Er lernte hart; infolgedessen bestand er."],["In short, the project was successful.","Kurz gesagt, das Projekt war erfolgreich."]] },
  { name: "Register & nuance", tip: "„Actually“ = „eigentlich/tatsächlich“ (nicht „aktuell“!). „Currently“ = „derzeit“.",
    words: [["actually","eigentlich / tatsächlich"],["currently","derzeit / gegenwärtig"],["eventually","schließlich / letztendlich"],["at the moment","im Moment"],["meanwhile","inzwischen / währenddessen"],["in fact","tatsächlich / genau genommen"],["obviously","offensichtlich"],["apparently","anscheinend"],["presumably","vermutlich"],["undoubtedly","zweifellos"]],
    sentences: [["Actually, I don't like coffee.","Eigentlich mag ich keinen Kaffee."],["I'm currently reading a great book.","Ich lese derzeit ein tolles Buch."],["He eventually arrived at midnight.","Er kam schließlich um Mitternacht an."]] },
  { name: "Travel verbs", tip: "„To set off“ = aufbrechen; „to stop over“ = zwischenlanden / übernachten.",
    words: [["to set off","aufbrechen / losfahren"],["to stop over","zwischenlanden"],["to get away","wegkommen / verreisen"],["to check out","auschecken"],["to look around","sich umsehen"],["to see off","verabschieden (am Bahnhof)"],["to pick up","abholen"],["to drop off","absetzen / vorbeibringen"],["sightseeing","Sehenswürdigkeiten besichtigen"],["off the beaten track","abseits der ausgetretenen Pfade"]],
    sentences: [["We set off at dawn.","Wir brachen bei Morgengrauen auf."],["Let's go sightseeing tomorrow.","Lass uns morgen Sehenswürdigkeiten besichtigen."],["I'll pick you up at seven.","Ich hole dich um sieben ab."]] }
];

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sample(rng, arr, n) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

function pickDistractors(rng, pool, answer, n) {
  const out = [];
  const candidates = pool.filter(x => x !== answer);
  for (const c of sample(rng, candidates, candidates.length)) {
    if (out.length >= n) break;
    out.push(c);
  }
  return out;
}

function genTopicUnit(topic, ti) {
  const rng = mulberry32(5000 + ti * 131);
  const enPool = topic.words.map(w => w[0]);
  const dePool = topic.words.map(w => w[1]);
  const lessons = [];

  function vocabLesson(idx, title, words) {
    const ex = [];
    words.forEach((w, i) => {
      const deToEn = (i + ti) % 2 === 0;
      const pool = deToEn ? dePool : enPool;
      const answer = deToEn ? w[0] : w[1];
      const prompt = deToEn ? w[1] : w[0];
      ex.push({
        type: "choice", dir: deToEn ? "de-en" : "en-de", prompt,
        options: sample(rng, [answer, ...pickDistractors(rng, pool, answer, 3)], 4),
        answer
      });
    });
    const pairs = sample(rng, topic.words, 4).map(w => [w[1], w[0]]);
    ex.push({ type: "match", prompt: "Paare zuordnen", pairs });
    const s = topic.sentences[idx % topic.sentences.length];
    ex.push({
      type: "words", dir: "de-en", prompt: s[1],
      bank: sample(rng, [...s[0].replace(/[.!?,:;']/g, "").split(" "), ...pickDistractors(rng, enPool, s[0], 2)], 99),
      answer: s[0].replace(/[.!?,:;']/g, "")
    });
    return { id: "g" + ti + "l" + idx, title, exercises: ex };
  }

  function sentenceLesson(idx, title) {
    const ex = [];
    topic.sentences.forEach((s, i) => {
      const deToEn = (i + ti) % 2 === 0;
      const pool = deToEn ? dePool.concat(topic.sentences.map(x => x[1])) : enPool.concat(topic.sentences.map(x => x[0]));
      const answer = deToEn ? s[0] : s[1];
      const prompt = deToEn ? s[1] : s[0];
      ex.push({
        type: "choice", dir: deToEn ? "de-en" : "en-de", prompt,
        options: sample(rng, [answer, ...pickDistractors(rng, pool, answer, 3)], 4),
        answer
      });
    });
    const s = topic.sentences[idx % topic.sentences.length];
    ex.push({
      type: "words", dir: "de-en", prompt: s[1],
      bank: sample(rng, [...s[0].replace(/[.!?,:;']/g, "").split(" "), ...pickDistractors(rng, enPool, s[0], 2)], 99),
      answer: s[0].replace(/[.!?,:;']/g, "")
    });
    ex.push({ type: "listen", prompt: "Tippe, was du hörst", answer: s[0], hint: s[1] });
    const w = topic.words[idx % topic.words.length];
    ex.push({
      type: "fill", sentence: "___ = " + w[1], gloss: "Englisches Wort für „" + w[1] + "“", options: sample(rng, [w[0], ...pickDistractors(rng, enPool, w[0], 3)], 4), answer: w[0]
    });
    return { id: "g" + ti + "l" + idx, title, exercises: ex };
  }

  const w1 = topic.words.slice(0, 5);
  const w2 = topic.words.slice(5, 10);
  lessons.push(vocabLesson(0, topic.name + " — Vokabeln 1", w1));
  lessons.push(vocabLesson(1, topic.name + " — Vokabeln 2", w2.length ? w2 : topic.words.slice(0, 5)));
  lessons.push(sentenceLesson(2, topic.name + " — im Satz"));
  return {
    id: "gu" + ti, title: "Einheit " + (UNITS.length + ti + 1) + " · " + topic.name,
    description: topic.name.toLowerCase() + " auf B1+-Niveau", color: ["#4b7bff", "#1cb0f6", "#ce82ff", "#ff9600", "#ff4b4b", "#00cd9c"][ti % 6],
    tip: topic.tip, lessons
  };
}

for (let i = 0; i < TOPICS.length; i++) UNITS.push(genTopicUnit(TOPICS[i], i));
