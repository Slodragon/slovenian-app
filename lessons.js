/* Slovenian course content for Slovenko */

const UNITS = [
  {
    id: "u1",
    title: "Unit 1 · Basics",
    description: "Say hello and survive your first day",
    color: "#58cc02",
    tip: "Slovenian has informal (ti) and formal (vam) forms. Start with the friendly ti-form.",
    lessons: [
      {
        id: "u1l1",
        title: "Greetings",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "Hello!", options: ["Živjo", "Adijo", "Hvala", "Prosim"], answer: "Živjo" },
          { type: "choice", dir: "sl-en", prompt: "Dobro jutro", options: ["Good morning", "Good night", "Goodbye", "Good evening"], answer: "Good morning" },
          { type: "choice", dir: "en-sl", prompt: "Goodbye", options: ["Prosim", "Živjo", "Adijo", "Hvala"], answer: "Adijo" },
          { type: "choice", dir: "sl-en", prompt: "Hvala", options: ["Please", "Thank you", "Yes", "Sorry"], answer: "Thank you" },
          { type: "choice", dir: "en-sl", prompt: "Please", options: ["Hvala", "Prosim", "Ne", "Da"], answer: "Prosim" },
          { type: "words", dir: "en-sl", prompt: "Good evening", bank: ["jutro", "Dober", "večer", "noč"], answer: "Dober večer" },
          { type: "listen", prompt: "Type what you hear", answer: "Lahko noč", hint: "Good night" }
        ]
      },
      {
        id: "u1l2",
        title: "Yes, no, sorry",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "Yes", options: ["Ne", "Mogoče", "Da", "Prosim"], answer: "Da" },
          { type: "choice", dir: "sl-en", prompt: "Ne", options: ["Yes", "No", "Maybe", "Please"], answer: "No" },
          { type: "choice", dir: "en-sl", prompt: "Sorry", options: ["Hvala", "Prosim", "Živjo", "Oprosti"], answer: "Oprosti" },
          { type: "choice", dir: "sl-en", prompt: "Oprosti", options: ["Sorry", "Thank you", "Hello", "Bye"], answer: "Sorry" },
          { type: "fill", sentence: "Dobro ___", gloss: "I am fine — fill in the verb", options: ["sem", "si", "je", "smo"], answer: "sem" },
          { type: "choice", dir: "en-sl", prompt: "I don't understand", options: ["Ne razumem", "Razumem", "Govorim", "Vidim"], answer: "Ne razumem" },
          { type: "words", dir: "sl-en", prompt: "Ne razumem", bank: ["Ne", "razumem", "vidim", "slišim"], answer: "Ne razumem" },
          { type: "listen", prompt: "Type what you hear", answer: "Hvala lepa", hint: "Thank you very much" }
        ]
      },
      {
        id: "u1l3",
        title: "Introductions",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "How are you? (to a friend)", options: ["Kako si?", "Kako ste?", "Kako vam je ime?", "Kje si?"], answer: "Kako si?" },
          { type: "choice", dir: "sl-en", prompt: "Kako si?", options: ["How are you?", "Where are you?", "What's your name?", "How old are you?"], answer: "How are you?" },
          { type: "choice", dir: "en-sl", prompt: "I am fine", options: ["Dobro sem", "Slabo sem", "Tu sem", "Hvala"], answer: "Dobro sem" },
          { type: "choice", dir: "sl-en", prompt: "Dobro sem", options: ["I am fine", "I am bad", "Thank you", "Excuse me"], answer: "I am fine" },
          { type: "choice", dir: "en-sl", prompt: "What's your name?", options: ["Kako ti je ime?", "Koliko si star?", "Kje živiš?", "Kako si?"], answer: "Kako ti je ime?" },
          { type: "fill", sentence: "Jaz ___ Ana.", gloss: "I am Ana", options: ["sem", "si", "je", "sva"], answer: "sem" },
          { type: "words", dir: "en-sl", prompt: "What's your name? (formal)", bank: ["Kako", "vam", "je", "ime", "si"], answer: "Kako vam je ime" },
          { type: "choice", dir: "en-sl", prompt: "Nice to meet you", options: ["Me veseli", "Adijo", "Na svidenje", "Prosim"], answer: "Me veseli" }
        ]
      }
    ]
  },
  {
    id: "u2",
    title: "Unit 2 · Food & drink",
    description: "Order food and drinks like a local",
    color: "#1cb0f6",
    tip: "Slovenian nouns have genders: masculine (kruh), feminine (voda), neuter (jabolko).",
    lessons: [
      {
        id: "u2l1",
        title: "Food basics",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "bread", options: ["voda", "kruh", "mleko", "sir"], answer: "kruh" },
          { type: "choice", dir: "sl-en", prompt: "Kruh", options: ["Milk", "Bread", "Cheese", "Water"], answer: "Bread" },
          { type: "choice", dir: "en-sl", prompt: "water", options: ["pivo", "voda", "kava", "sok"], answer: "voda" },
          { type: "choice", dir: "en-sl", prompt: "apple", options: ["hruška", "jabolko", "banana", "pomaranča"], answer: "jabolko" },
          { type: "choice", dir: "sl-en", prompt: "Jabolko", options: ["Pear", "Apple", "Banana", "Orange"], answer: "Apple" },
          { type: "choice", dir: "en-sl", prompt: "I eat bread", options: ["Pijem vodo", "Jem kruh", "Ješ jabolko", "Je kruh"], answer: "Jem kruh" },
          { type: "fill", sentence: "___ je voda.", gloss: "This is water", options: ["To", "Ti", "Jaz", "On"], answer: "To" },
          { type: "listen", prompt: "Type what you hear", answer: "Jabolko, prosim", hint: "An apple, please" }
        ]
      },
      {
        id: "u2l2",
        title: "Drinks & ordering",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "beer", options: ["voda", "kava", "pivo", "mleko"], answer: "pivo" },
          { type: "choice", dir: "en-sl", prompt: "coffee", options: ["čaj", "pivo", "kava", "sok"], answer: "kava" },
          { type: "choice", dir: "sl-en", prompt: "Mleko", options: ["Beer", "Tea", "Milk", "Juice"], answer: "Milk" },
          { type: "choice", dir: "en-sl", prompt: "tea", options: ["čokolada", "čaj", "kava", "voda"], answer: "čaj" },
          { type: "choice", dir: "en-sl", prompt: "I drink water", options: ["Jem kruh", "Pijem vodo", "Piješ čaj", "To je mleko"], answer: "Pijem vodo" },
          { type: "words", dir: "en-sl", prompt: "One beer, please", bank: ["dve", "pivo", "Prosim", "eno", "kavi"], answer: "Prosim eno pivo" },
          { type: "choice", dir: "en-sl", prompt: "Delicious!", options: ["Okusno!", "Slabo!", "Dragо!", "Hvala!"], answer: "Okusno!" },
          { type: "listen", prompt: "Type what you hear", answer: "Kava, prosim", hint: "Coffee, please" }
        ]
      },
      {
        id: "u2l3",
        title: "At the restaurant",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "The menu, please", options: ["Račun, prosim", "Jedilni list, prosim", "Hrana, prosim", "Voda, prosim"], answer: "Jedilni list, prosim" },
          { type: "choice", dir: "sl-en", prompt: "Račun, prosim", options: ["The menu, please", "The bill, please", "More water", "I'm hungry"], answer: "The bill, please" },
          { type: "choice", dir: "en-sl", prompt: "I would like tea", options: ["Rad bi čaj", "Rad pijem čaj", "Imam čaj", "Čaj je tu"], answer: "Rad bi čaj" },
          { type: "choice", dir: "sl-en", prompt: "Vse je okusno", options: ["Everything is delicious", "Nothing is tasty", "The food is bad", "I am thirsty"], answer: "Everything is delicious" },
          { type: "fill", sentence: "Je ___ hrana okusna?", gloss: "Is this food tasty?", options: ["ta", "to", "ti", "tisto"], answer: "ta" },
          { type: "words", dir: "en-sl", prompt: "Everything is good", bank: ["Vse", "je", "dobro", "slabo"], answer: "Vse je dobro" },
          { type: "match", prompt: "Match the pairs", pairs: [["water", "voda"], ["bread", "kruh"], ["beer", "pivo"], ["coffee", "kava"]] },
          { type: "listen", prompt: "Type what you hear", answer: "Eno mleko, prosim", hint: "One milk, please" }
        ]
      }
    ]
  },
  {
    id: "u3",
    title: "Unit 3 · People & family",
    description: "Talk about yourself and your loved ones",
    color: "#ce82ff",
    tip: "Slovenian has a dual: two people are 'dva moža' (masc.) but 'dve ženski' (fem.).",
    lessons: [
      {
        id: "u3l1",
        title: "People",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "man", options: ["ženska", "moški", "otrok", "pes"], answer: "moški" },
          { type: "choice", dir: "en-sl", prompt: "woman", options: ["moški", "deklica", "ženska", "mačka"], answer: "ženska" },
          { type: "choice", dir: "sl-en", prompt: "Deček", options: ["Girl", "Boy", "Child", "Man"], answer: "Boy" },
          { type: "choice", dir: "en-sl", prompt: "girl", options: ["deček", "deklica", "ženska", "sestra"], answer: "deklica" },
          { type: "choice", dir: "en-sl", prompt: "child", options: ["otrok", "pes", "brat", "hiša"], answer: "otrok" },
          { type: "choice", dir: "sl-en", prompt: "Prijatelj", options: ["Brother", "Friend", "Teacher", "Neighbor"], answer: "Friend" },
          { type: "words", dir: "en-sl", prompt: "This is a woman", bank: ["To", "je", "ženska", "moški"], answer: "To je ženska" },
          { type: "listen", prompt: "Type what you hear", answer: "On je prijatelj", hint: "He is a friend" }
        ]
      },
      {
        id: "u3l2",
        title: "Family",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "mother", options: ["oče", "sestra", "mama", "teta"], answer: "mama" },
          { type: "choice", dir: "en-sl", prompt: "father", options: ["mama", "brat", "oče", "stric"], answer: "oče" },
          { type: "choice", dir: "sl-en", prompt: "Brat", options: ["Sister", "Father", "Brother", "Son"], answer: "Brother" },
          { type: "choice", dir: "en-sl", prompt: "sister", options: ["brat", "sestra", "mama", "hči"], answer: "sestra" },
          { type: "choice", dir: "en-sl", prompt: "family", options: ["hiša", "družina", "šola", "mesto"], answer: "družina" },
          { type: "choice", dir: "sl-en", prompt: "Družina", options: ["House", "School", "Family", "City"], answer: "Family" },
          { type: "fill", sentence: "To je moja ___.", gloss: "This is my family", options: ["družina", "hiša", "šola", "miza"], answer: "družina" },
          { type: "words", dir: "en-sl", prompt: "My father", bank: ["Moj", "oče", "mama", "je", "brat"], answer: "Moj oče" }
        ]
      },
      {
        id: "u3l3",
        title: "Pronouns & love",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "I", options: ["ti", "jaz", "on", "mi"], answer: "jaz" },
          { type: "choice", dir: "en-sl", prompt: "you (sg.)", options: ["jaz", "on", "ti", "vi"], answer: "ti" },
          { type: "choice", dir: "sl-en", prompt: "Ona", options: ["He", "She", "We", "They"], answer: "She" },
          { type: "choice", dir: "en-sl", prompt: "we", options: ["jaz", "ti", "oni", "mi"], answer: "mi" },
          { type: "choice", dir: "sl-en", prompt: "Oni", options: ["We", "You (pl.)", "They", "I"], answer: "They" },
          { type: "words", dir: "en-sl", prompt: "I am here", bank: ["Jaz", "sem", "tu", "si", "on"], answer: "Jaz sem tu" },
          { type: "choice", dir: "en-sl", prompt: "I love you", options: ["Ljubim te", "Vidim te", "Slišim te", "Čakam te"], answer: "Ljubim te" },
          { type: "match", prompt: "Match the pairs", pairs: [["I", "jaz"], ["you", "ti"], ["he", "on"], ["she", "ona"]] }
        ]
      }
    ]
  },
  {
    id: "u4",
    title: "Unit 4 · Around town",
    description: "Numbers, colors and getting around",
    color: "#ff9600",
    tip: "Slovenian has 6 grammatical cases — word endings change depending on their role in the sentence.",
    lessons: [
      {
        id: "u4l1",
        title: "Numbers 1–5",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "one", options: ["ena", "dva", "tri", "štiri"], answer: "ena" },
          { type: "choice", dir: "en-sl", prompt: "two", options: ["ena", "pet", "dva", "tri"], answer: "dva" },
          { type: "choice", dir: "sl-en", prompt: "tri", options: ["two", "four", "five", "three"], answer: "three" },
          { type: "choice", dir: "en-sl", prompt: "four", options: ["tri", "pet", "šest", "štiri"], answer: "štiri" },
          { type: "choice", dir: "sl-en", prompt: "pet", options: ["four", "six", "five", "ten"], answer: "five" },
          { type: "words", dir: "en-sl", prompt: "three apples", bank: ["Tri", "jabolka", "dve", "ena", "jabolko"], answer: "Tri jabolka" },
          { type: "match", prompt: "Match the pairs", pairs: [["one", "ena"], ["two", "dva"], ["three", "tri"], ["four", "štiri"]] },
          { type: "listen", prompt: "Type what you hear", answer: "Štiri kave", hint: "Four coffees" }
        ]
      },
      {
        id: "u4l2",
        title: "Colors",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "red", options: ["moder", "rdeč", "zelen", "bel"], answer: "rdeč" },
          { type: "choice", dir: "en-sl", prompt: "blue", options: ["črn", "rumen", "moder", "zelen"], answer: "moder" },
          { type: "choice", dir: "sl-en", prompt: "Zelen", options: ["Yellow", "Green", "Black", "White"], answer: "Green" },
          { type: "choice", dir: "en-sl", prompt: "white", options: ["črn", "bel", "rdeč", "moder"], answer: "bel" },
          { type: "choice", dir: "en-sl", prompt: "black", options: ["bel", "rumen", "črn", "zelen"], answer: "črn" },
          { type: "fill", sentence: "Avto je ___.", gloss: "The car is red", options: ["rdeč", "moder", "bel", "zelen"], answer: "rdeč" },
          { type: "words", dir: "en-sl", prompt: "a green apple", bank: ["Zeleno", "jabolko", "rdeče", "modro"], answer: "Zeleno jabolko" },
          { type: "match", prompt: "Match the pairs", pairs: [["red", "rdeč"], ["blue", "moder"], ["green", "zelen"], ["white", "bel"]] }
        ]
      },
      {
        id: "u4l3",
        title: "Places & directions",
        exercises: [
          { type: "choice", dir: "en-sl", prompt: "house", options: ["šola", "mesto", "hiša", "trgovina"], answer: "hiša" },
          { type: "choice", dir: "en-sl", prompt: "school", options: ["hiša", "šola", "bolnišnica", "park"], answer: "šola" },
          { type: "choice", dir: "sl-en", prompt: "Mesto", options: ["Village", "City", "House", "Street"], answer: "City" },
          { type: "choice", dir: "en-sl", prompt: "Where?", options: ["Kdaj?", "Kdo?", "Kje?", "Zakaj?"], answer: "Kje?" },
          { type: "choice", dir: "sl-en", prompt: "Kje si?", options: ["Who are you?", "Where are you?", "When are you?", "Why are you?"], answer: "Where are you?" },
          { type: "choice", dir: "en-sl", prompt: "Welcome", options: ["Adijo", "Dobrodošli", "Živjo", "Oprosti"], answer: "Dobrodošli" },
          { type: "words", dir: "en-sl", prompt: "Welcome to Slovenia", bank: ["Dobrodošli", "v", "Sloveniji", "na", "Sloveniji"], answer: "Dobrodošli v Sloveniji" },
          { type: "listen", prompt: "Type what you hear", answer: "Kje je šola", hint: "Where is the school" }
        ]
      }
    ]
  }
];

function findLesson(id) {
  for (const u of UNITS) for (const l of u.lessons) if (l.id === id) return { unit: u, lesson: l };
  return null;
}
