/* EnglishProfi — hand-written advanced (B1+) units. Prompts in German, target language English. */

const UNITS = [
  {
    id: "u1",
    title: "Einheit 1 · Stil & Register",
    description: "Formell vs. umgangssprachlich — wähle die passende Ebene",
    color: "#4b7bff",
    tip: "Im Englischen hängt die Wortwahl stark vom Kontext ab: formell (Beruf, Behörden) vs. locker (Freunde).",
    lessons: [
      {
        id: "u1l1",
        title: "Formelles Englisch",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Ich möchte mich erkundigen (formell)", options: ["I would like to inquire", "I wanna ask", "Give me the info", "What's up"], answer: "I would like to inquire" },
          { type: "choice", dir: "de-en", prompt: "außerdem / des Weiteren (formell)", options: ["furthermore", "also", "plus", "and stuff"], answer: "furthermore" },
          { type: "choice", dir: "de-en", prompt: "benötigen (formell)", options: ["require", "need", "want", "gonna need"], answer: "require" },
          { type: "choice", dir: "de-en", prompt: "kaufen (formell)", options: ["purchase", "buy", "get", "grab"], answer: "purchase" },
          { type: "choice", dir: "en-de", prompt: "regarding", options: ["bezüglich", "obwohl", "trotzdem", "außerdem"], answer: "bezüglich" },
          { type: "words", dir: "de-en", prompt: "Ich entschuldige mich für die Unannehmlichkeiten (formell)", bank: ["I", "apologize", "inconvenience", "for", "the", "sorry"], answer: "I apologize for the inconvenience" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "I look forward to hearing from you", hint: "formelle Briefschlussformel: „Ich freue mich auf Ihre Antwort“" }
        ]
      },
      {
        id: "u1l2",
        title: "Umgangssprachliches Englisch",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Ich habe keine Lust mehr (umgangssprachlich)", options: ["I can't be bothered", "I am not motivated", "I refuse", "I dislike it"], answer: "I can't be bothered" },
          { type: "choice", dir: "en-de", prompt: "What's up?", options: ["Was ist los?", "Wie geht's? (förmlich)", "Wo ist es?", "Wie viel kostet es?"], answer: "Was ist los?" },
          { type: "choice", dir: "de-en", prompt: "Das ist kinderleicht (umgangssprachlich)", options: ["It's a piece of cake", "It's very difficult", "It costs a lot", "It takes forever"], answer: "It's a piece of cake" },
          { type: "choice", dir: "de-en", prompt: "Mach's gut! / Bis dann!", options: ["Take care", "Be careful", "Good luck", "No problem"], answer: "Take care" },
          { type: "fill", sentence: "I ___ forward to the weekend.", gloss: "„sich freuen auf“ (look ___)", options: ["look", "am looking", "looking", "looked"], answer: "look" },
          { type: "words", dir: "de-en", prompt: "Keine Ursache! (umgangssprachlich)", bank: ["No", "worries", "thanks", "problem", "matter"], answer: "No worries" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "I can't make it on Friday", hint: "„Am Freitag schaffe ich es nicht“" }
        ]
      },
      {
        id: "u1l3",
        title: "Passende Ebene wählen",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Welches Wort passt NICHT in einen formellen Geschäftsbrief?", options: ["gonna", "furthermore", "require", "regarding"], answer: "gonna" },
          { type: "choice", dir: "en-de", prompt: "endeavor", options: ["sich bemühen", "beginnen", "enden", "erlauben"], answer: "sich bemühen" },
          { type: "choice", dir: "de-en", prompt: "unterstützen / helfen (formell)", options: ["assist", "help", "aid (umgangssprachlich)", "support"], answer: "assist" },
          { type: "choice", dir: "en-de", prompt: "commence", options: ["beginnen", "enden", "kommen", "kaufen"], answer: "beginnen" },
          { type: "words", dir: "de-en", prompt: "Wir beginnen morgen mit dem Projekt (formell)", bank: ["commence", "We", "the", "project", "tomorrow"], answer: "We commence the project tomorrow" },
          { type: "match", prompt: "Paare zuordnen", pairs: [["formal: benötigen", "require"], ["locker: kaufen", "grab"], ["formal: beginnen", "commence"], ["locker: Was läuft?", "What's up?"]] },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "I regret to inform you", hint: "formell: „Ich muss Ihnen leider mitteilen…“" }
        ]
      }
    ]
  },
  {
    id: "u2",
    title: "Einheit 2 · Phrasal Verbs",
    description: "Die wichtigsten englischen Verbpartikel-Kombinationen",
    color: "#1cb0f6",
    tip: "Phrasal Verbs bestehen aus Verb + Partikel (up, down, off…). Die Partikel ändert oft die Bedeutung grundlegend.",
    lessons: [
      {
        id: "u2l1",
        title: "Phrasal Verbs 1",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "aufgeben", options: ["give up", "give in", "give out", "give away"], answer: "give up" },
          { type: "choice", dir: "de-en", prompt: "ablehnen (ein Angebot)", options: ["turn down", "turn up", "turn off", "turn over"], answer: "turn down" },
          { type: "choice", dir: "de-en", prompt: "sich freuen auf", options: ["look forward to", "look after", "look into", "look up"], answer: "look forward to" },
          { type: "choice", dir: "de-en", prompt: "verschieben / aufschieben", options: ["put off", "put on", "put up", "put down"], answer: "put off" },
          { type: "choice", dir: "en-de", prompt: "come across", options: ["zufällig begegnen / finden", "ankommen", "mitkommen", "vorbeikommen"], answer: "zufällig begegnen / finden" },
          { type: "words", dir: "de-en", prompt: "Wir haben kein Benzin mehr", bank: ["run", "We", "out", "of", "petrol", "have"], answer: "We have run out of petrol" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "Please turn down the music", hint: "„Bitte mach die Musik leiser“" }
        ]
      },
      {
        id: "u2l2",
        title: "Phrasal Verbs 2",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "abheben (Flugzeug) / durchstarten", options: ["take off", "take up", "take over", "take after"], answer: "take off" },
          { type: "choice", dir: "de-en", prompt: "sich mit jemandem gut verstehen", options: ["get along with", "get over", "get by", "get in"], answer: "get along with" },
          { type: "choice", dir: "de-en", prompt: "auseinanderbrechen / kaputt gehen", options: ["break down", "break up", "break in", "break out"], answer: "break down" },
          { type: "choice", dir: "de-en", prompt: "nachholen / aufholen", options: ["catch up on", "catch up with", "keep up with", "make up for"], answer: "catch up on" },
          { type: "fill", sentence: "My car ___ ___ yesterday.", gloss: "„kaputt gehen“ (break ___)", options: ["broke down", "broke up", "broke in", "broke out"], answer: "broke down" },
          { type: "words", dir: "de-en", prompt: "Ich komme gut mit meinen Kollegen aus", bank: ["get", "I", "along", "with", "well", "my", "colleagues"], answer: "I get along well with my colleagues" },
          { type: "match", prompt: "Paare zuordnen", pairs: [["give up", "aufgeben"], ["turn down", "ablehnen"], ["put off", "aufschieben"], ["take off", "abheben"]] },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "Don't give up", hint: "„Gib nicht auf!“" }
        ]
      },
      {
        id: "u2l3",
        title: "Phrasal Verbs im Satz",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "etwas zufällig entdecken", options: ["come across", "come up with", "come over", "come out"], answer: "come across" },
          { type: "choice", dir: "de-en", prompt: "sich etwas einfallen lassen", options: ["come up with", "come across", "come about", "come along"], answer: "come up with" },
          { type: "choice", dir: "en-de", prompt: "carry on", options: ["weitermachen", "weitergeben", "tragen", "sich kümmern"], answer: "weitermachen" },
          { type: "fill", sentence: "I'm looking ___ ___ my keys.", gloss: "„suchen“ (look ___)", options: ["for", "after", "up", "into"], answer: "for" },
          { type: "words", dir: "de-en", prompt: "Die Besprechung wurde auf nächste Woche verschoben", bank: ["postponed", "The", "meeting", "was", "to", "next", "week"], answer: "The meeting was postponed to next week" },
          { type: "choice", dir: "de-en", prompt: "herausfinden", options: ["find out", "find", "look for", "work out"], answer: "find out" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "I ran out of milk", hint: "„Die Milch ist alle“" }
        ]
      }
    ]
  },
  {
    id: "u3",
    title: "Einheit 3 · Redewendungen",
    description: "Idioms — die geheime Sprache des Englischen",
    color: "#ce82ff",
    tip: "Idioms wirken oft wörtlich übersetzt komisch. „Break the ice“ = das Eis brechen, nicht wortwörtlich.",
    lessons: [
      {
        id: "u3l1",
        title: "Idioms 1",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "das Eis brechen", options: ["break the ice", "break the snow", "melt the ice", "cut the ice"], answer: "break the ice" },
          { type: "choice", dir: "de-en", prompt: "sehr selten („einmal bei blauem Mond“)", options: ["once in a blue moon", "once upon a time", "every now and then", "from time to time"], answer: "once in a blue moon" },
          { type: "choice", dir: "de-en", prompt: "ins Bett gehen („den Sack treffen“)", options: ["hit the sack", "hit the hay", "make the bed", "sleep tight"], answer: "hit the sack" },
          { type: "choice", dir: "en-de", prompt: "under the weather", options: ["sich nicht wohlfühlen / krank sein", "unter der Dusche", "bei schlechtem Wetter", "unter der Decke"], answer: "sich nicht wohlfühlen / krank sein" },
          { type: "words", dir: "de-en", prompt: "Das kostet ein Vermögen (wörtlich: einen Arm und ein Bein)", bank: ["an", "costs", "It", "leg", "arm", "and", "a"], answer: "It costs an arm and a leg" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "It's a piece of cake", hint: "„Das ist kinderleicht“" }
        ]
      },
      {
        id: "u3l2",
        title: "Idioms 2",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "ein Geheimnis ausplaudern („die Katze aus dem Sack lassen“)", options: ["let the cat out of the bag", "buy a pig in a poke", "kill two birds", "put the cat among the pigeons"], answer: "let the cat out of the bag" },
          { type: "choice", dir: "de-en", prompt: "in den sauren Apfel beißen", options: ["bite the bullet", "bite the apple", "chew the bullet", "eat the apple"], answer: "bite the bullet" },
          { type: "choice", dir: "en-de", prompt: "kill two birds with one stone", options: ["zwei Fliegen mit einer Klappe schlagen", "zwei Vögel mit einem Stein töten (wörtlich)", "einen Vogel fangen", "zwei Steine werfen"], answer: "zwei Fliegen mit einer Klappe schlagen" },
          { type: "fill", sentence: "She ___ the cat out of the bag.", gloss: "„verriet das Geheimnis“ (let ___)", options: ["let", "lets", "letting", "letted"], answer: "let" },
          { type: "words", dir: "de-en", prompt: "Das war kinderleicht!", bank: ["piece", "of", "cake", "a", "It", "was"], answer: "It was a piece of cake" },
          { type: "match", prompt: "Paare zuordnen", pairs: [["break the ice", "das Eis brechen"], ["hit the sack", "ins Bett gehen"], ["bite the bullet", "in den sauren Apfel beißen"], ["under the weather", "sich krank fühlen"]] },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "once in a blue moon", hint: "„ganz selten“" }
        ]
      },
      {
        id: "u3l3",
        title: "Idioms im Kontext",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "eine unüberlegte Kaufentscheidung („ein Schwein im Sack kaufen“)", options: ["buying a pig in a poke", "buying a cat in a bag", "selling a pig", "feeding a poke"], answer: "buying a pig in a poke" },
          { type: "choice", dir: "en-de", prompt: "spill the beans", options: ["alles ausplaudern / ein Geheimnis verraten", "Bohnen verschütten", "bohnen essen", "die Bohnen zählen"], answer: "alles ausplaudern / ein Geheimnis verraten" },
          { type: "choice", dir: "de-en", prompt: "sich wohlfühlen („wie ein Fisch im Wasser“ — umgangssprachlich: at home)", options: ["feel at home", "feel like a fish", "be at water", "feel homely"], answer: "feel at home" },
          { type: "words", dir: "de-en", prompt: "Er hat das Geheimnis ausgeplaudert", bank: ["He", "spilled", "the", "beans", "let", "cat"], answer: "He spilled the beans" },
          { type: "fill", sentence: "It's raining cats and ___.", gloss: "„Es regnet wie aus Eimern“ (cats and ___)", options: ["dogs", "mice", "birds", "fish"], answer: "dogs" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "break a leg", hint: "„ Hals- und Beinbruch!“ (wörtlich: ein Bein brechen)" }
        ]
      }
    ]
  },
  {
    id: "u4",
    title: "Einheit 4 · Grammatik B1+",
    description: "Conditionals, Passiv, Indirekte Rede — die schweren Kaliber",
    color: "#ff9600",
    tip: "Third Conditional: If + past perfect, would have + past participle — für irreale vergangene Situationen.",
    lessons: [
      {
        id: "u4l1",
        title: "Conditionals",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Wenn ich das gewusst hätte, hätte ich angerufen (3. Conditional)", options: ["If I had known, I would have called", "If I knew, I would call", "If I would know, I had called", "If I had known, I would call"], answer: "If I had known, I would have called" },
          { type: "choice", dir: "de-en", prompt: "Ich wünschte, ich hätte mehr gelernt", options: ["I wish I had studied more", "I wish I would study more", "I wish I have studied more", "I wished I studied more"], answer: "I wish I had studied more" },
          { type: "choice", dir: "en-de", prompt: "If I were you, I would accept", options: ["Wenn ich du wäre, würde ich annehmen", "Wenn ich du war, nehme ich an", "Als ich du war, akzeptiere ich", "Wenn ich dich sehe, nehme ich an"], answer: "Wenn ich du wäre, würde ich annehmen" },
          { type: "fill", sentence: "If she ___ (study) harder, she would pass.", gloss: "2. Conditional: Wenn sie härter lernte…", options: ["studied", "had studied", "would study", "studies"], answer: "studied" },
          { type: "words", dir: "de-en", prompt: "Hätte ich Geld, würde ich reisen", bank: ["Had", "money", "I", "would", "travel", "I", "have"], answer: "Had I money I would travel" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "If I had known, I would have told you", hint: "„Hätte ich es gewusst, hätte ich es dir gesagt“" }
        ]
      },
      {
        id: "u4l2",
        title: "Passiv & Cleft Sentences",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Der Bericht wurde von Anna geschrieben (Passiv)", options: ["The report was written by Anna", "The report written by Anna was", "Anna was written the report", "The report was wrote by Anna"], answer: "The report was written by Anna" },
          { type: "choice", dir: "de-en", prompt: "Was ich brauche, ist mehr Zeit (Cleft Sentence)", options: ["What I need is more time", "That I need is more time", "Which I need is more time", "What I need it is more time"], answer: "What I need is more time" },
          { type: "choice", dir: "en-de", prompt: "It was in London that we met", options: ["In London haben wir uns getroffen (Betonung)", "Wir trafen uns in London", "Es war London wo wir uns trafen", "London war es, als wir uns trafen"], answer: "In London haben wir uns getroffen (Betonung)" },
          { type: "fill", sentence: "The house ___ (build) in 1920.", gloss: "Passiv Vergangenheit: Das Haus wurde 1920 gebaut", options: ["was built", "is built", "were built", "built"], answer: "was built" },
          { type: "words", dir: "de-en", prompt: "Was mich wirklich ärgert, ist die Unpünktlichkeit", bank: ["is", "annoys", "me", "What", "really", "punctuality", "the", "lack", "of"], answer: "What really annoys me is the lack of punctuality" },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "What I need is a holiday", hint: "„Was ich brauche, ist ein Urlaub“" }
        ]
      },
      {
        id: "u4l3",
        title: "Indirekte Rede & Nuancen",
        exercises: [
          { type: "choice", dir: "de-en", prompt: "Er sagte, er sei krank (Indirekte Rede)", options: ["He said he was ill", "He said he is ill", "He said he were ill", "He said he has been ill"], answer: "He said he was ill" },
          { type: "choice", dir: "de-en", prompt: "aktuell ( NICHT „actual“!)", options: ["current", "actual", "present", "real"], answer: "current" },
          { type: "choice", dir: "de-en", prompt: "eventuell ( NICHT „eventual“!)", options: ["possibly / maybe", "eventual", "finally", "actually"], answer: "possibly / maybe" },
          { type: "choice", dir: "en-de", prompt: "handy (deutsches Fremdwort im Englischen)", options: ["Mobiltelefon", "praktisch", "handlich", "Handy wie Werkzeug"], answer: "Mobiltelefon" },
          { type: "fill", sentence: "She said she ___ (be) tired.", gloss: "Indirekte Rede: Sie sagte, sie sei müde", options: ["was", "is", "were", "had been"], answer: "was" },
          { type: "words", dir: "de-en", prompt: "Ich habe meinen Führerschein gemacht (korrekt: got, nicht made!)", bank: ["got", "I", "my", "driver's", "license", "made"], answer: "I got my driver's license" },
          { type: "match", prompt: "Paare zuordnen", pairs: [["aktuell", "current"], ["eventuell", "possibly"], ["bekommen", "get / receive"], ["handy", "mobile phone"]] },
          { type: "listen", prompt: "Tippe, was du hörst", answer: "He said he was tired", hint: "„Er sagte, er sei müde“" }
        ]
      }
    ]
  }
];

function findLesson(id) {
  for (const u of UNITS) for (const l of u.lessons) if (l.id === id) return { unit: u, lesson: l };
  return null;
}
