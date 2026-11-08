/* Slovenko — generated course content.
   Adds 36 topic units (3 lessons each) on top of the hand-written units.
   Deterministic: same seed -> same lessons, so tests are stable. */

const TOPICS = [
  { name: "Animals", tip: "Many animal names are also used for people (pes = dog, but 'medved' = bear).",
    words: [["pes","dog"],["mačka","cat"],["konj","horse"],["krava","cow"],["prašič","pig"],["ovca","sheep"],["kokoš","chicken"],["raca","duck"],["lev","lion"],["tiger","tiger"],["volk","wolf"],["medved","bear"],["zajec","rabbit"],["ptica","bird"]],
    sentences: [["Imam psa.","I have a dog."],["Mačka spi.","The cat is sleeping."],["Konj teče.","The horse is running."],["Pes laja.","The dog is barking."]] },
  { name: "Weather", tip: "Weather verbs: 'dežuje' (it's raining), 'sneži' (it's snowing).",
    words: [["sonce","sun"],["dež","rain"],["sneg","snow"],["veter","wind"],["oblak","cloud"],["nevihta","storm"],["megla","fog"],["vroče","hot"],["mrzlo","cold"],["sončno","sunny"]],
    sentences: [["Danes je sončno.","Today is sunny."],["Dežuje.","It's raining."],["Zunaj je mrzlo.","It's cold outside."],["Veter piha.","The wind is blowing."]] },
  { name: "Days & time", tip: "Days are lowercase in Slovenian; capitalize only at the start of a sentence.",
    words: [["ponedeljek","Monday"],["torek","Tuesday"],["sreda","Wednesday"],["četrtek","Thursday"],["petek","Friday"],["sobota","Saturday"],["nedelja","Sunday"],["jutro","morning"],["popoldne","afternoon"],["zvečer","evening"],["ura","hour / clock"]],
    sentences: [["Danes je ponedeljek.","Today is Monday."],["Zjutraj pijem kavo.","In the morning I drink coffee."],["Zvečer grem spat.","In the evening I go to sleep."]] },
  { name: "Body parts", tip: "'Boli me…' (it hurts me) is the standard way to say you have a pain.",
    words: [["glava","head"],["roki","arms / hands"],["noga","leg / foot"],["oko","eye"],["ujo","ear"],["nos","nose"],["usta","mouth"],["zobje","teeth"],["trebuh","stomach"],["srce","heart"]],
    sentences: [["Boli me glava.","My head hurts."],["Imam dve roki.","I have two arms."],["Oči me bolijo.","My eyes hurt."]] },
  { name: "Clothing", tip: "'Obleci' is the imperative: 'Obleci jakno!' = Put on your jacket!",
    words: [["majica","t-shirt"],["hlače","pants"],["obleka","dress"],["srajca","shirt"],["čevlji","shoes"],["nogavice","socks"],["kapa","hat"],["šal","scarf"],["jakna","jacket"],["rokavice","gloves"]],
    sentences: [["Obleci jakno!","Put on your jacket!"],["Kupi nove čevlje.","Buy new shoes."],["Imam rdeč šal.","I have a red scarf."]] },
  { name: "House & furniture", tip: "'Na' + location: 'na mizi' = on the table.",
    words: [["miza","table"],["stol","chair"],["postelja","bed"],["omara","wardrobe"],["luč","lamp"],["okno","window"],["vrata","door"],["stena","wall"],["tla","floor"],["hladilnik","fridge"]],
    sentences: [["Sedim na stolu.","I'm sitting on the chair."],["Okno je odprto.","The window is open."],["Postelja je udobna.","The bed is comfortable."]] },
  { name: "Transport", tip: "'Z' + instrumental: 'z vlakom' = by train, 'z avionom' = by plane.",
    words: [["avto","car"],["vlak","train"],["letalo","airplane"],["avtobus","bus"],["kolo","bicycle"],["ladja","ship"],["postaja","station"],["vozovnica","ticket"],["prtljaga","luggage"],["potni list","passport"]],
    sentences: [["Grem z vlakom.","I'm going by train."],["Kje je postaja?","Where is the station?"],["Imam vozovnico.","I have a ticket."]] },
  { name: "School & work", tip: "'Naloga' = homework/task; 'izpit' = exam.",
    words: [["učitelj","teacher"],["učenec","student"],["knjiga","book"],["zvezek","notebook"],["svinčnik","pencil"],["pisalo","pen"],["papir","paper"],["naloga","homework"],["izpit","exam"],["pisarna","office"]],
    sentences: [["Berem knjigo.","I'm reading a book."],["Napiši nalogo!","Do your homework!"],["Učitelj poučuje.","The teacher is teaching."]] },
  { name: "Daily routine", tip: "Reflexive verbs end in -se: 'zbudim se' = I wake up.",
    words: [["zbuditi se","to wake up"],["umiti se","to wash"],["jesti","to eat"],["piti","to drink"],["spati","to sleep"],["delati","to work"],["hoditi","to walk"],["teči","to run"],["počivati","to rest"]],
    sentences: [["Zjutraj se zbudim.","I wake up in the morning."],["Rad tečem.","I like running."],["Zvečer počivam.","I rest in the evening."]] },
  { name: "Shopping", tip: "'Koliko stane?' = How much does it cost? — the shopkeeper's best friend.",
    words: [["trgovina","shop"],["trg","market"],["denar","money"],["cena","price"],["nakup","purchase"],["prodajalec","shop assistant"],["kupec","customer"],["vrečka","bag"],["spletna trgovina","online shop"]],
    sentences: [["Grem v trgovino.","I'm going to the shop."],["Koliko stane?","How much does it cost?"],["Plačam z denarjem.","I'm paying with money."]] },
  { name: "Health", tip: "'Pojdi k zdravniku' = Go to the doctor. 'V lekarni' = at the pharmacy.",
    words: [["zdravnik","doctor"],["bolnišnica","hospital"],["zdravilo","medicine"],["tableta","pill"],["bolečina","pain"],["vročina","fever"],["lekarna","pharmacy"],["bolnik","patient"]],
    sentences: [["Boli me trebuh.","My stomach hurts."],["Pojdi k zdravniku.","Go to the doctor."],["Kupi zdravila v lekarni.","Buy medicine at the pharmacy."]] },
  { name: "Sports", tip: "'Igrati' + sport: 'igram nogomet' = I play football.",
    words: [["nogomet","football"],["košarka","basketball"],["tenis","tennis"],["plavanje","swimming"],["smučanje","skiing"],["tek","running"],["telovadba","gym workout"],["ekipa","team"],["tekma","match"],["zmaga","victory"]],
    sentences: [["Igram nogomet.","I play football."],["Rad plavam.","I like swimming."],["Zmaga je super!","Winning is great!"]] },
  { name: "Hobbies", tip: "'Rad berem' = I like reading (literally: I willingly read).",
    words: [["branje","reading"],["glasba","music"],["slikanje","painting"],["kuhanje","cooking"],["vrtnarjenje","gardening"],["fotografija","photography"],["potovanje","travelling"],["igranje iger","gaming"]],
    sentences: [["Rad berem.","I like reading."],["Poslušam glasbo.","I listen to music."],["Fotografiram naravo.","I photograph nature."]] },
  { name: "Technology", tip: "Slovenian borrows many tech words: 'aplikacija', 'geslo', 'računalnik'.",
    words: [["telefon","phone"],["računalnik","computer"],["internet","internet"],["aplikacija","app"],["geslo","password"],["e-pošta","email"],["tipkovnica","keyboard"],["zaslon","screen"]],
    sentences: [["Odpri aplikacijo.","Open the app."],["Vnesi geslo.","Enter the password."],["Računalnik je nov.","The computer is new."]] },
  { name: "City & services", tip: "Public services: banka (bank), pošta (post office), policija (police).",
    words: [["banka","bank"],["pošta","post office"],["policija","police"],["muzej","museum"],["knjižnica","library"],["park","park"],["restavracija","restaurant"],["supermarket","supermarket"]],
    sentences: [["Pošiljam pismo na pošti.","I'm mailing a letter at the post office."],["Grem v knjižnico.","I'm going to the library."],["Muzej je zanimiv.","The museum is interesting."]] },
  { name: "Feelings", tip: "'Sem srečen' = I am happy (verb 'biti' + adjective).",
    words: [["sreča","happiness"],["žalost","sadness"],["jeza","anger"],["strah","fear"],["ljubezen","love"],["presenečenje","surprise"]],
    sentences: [["Sem srečen!","I'm happy!"],["Žalosten sem.","I'm sad."],["To me jezi.","That annoys me."]] },
  { name: "Kitchen", tip: "Imperatives: 'Skuhaj!' = Cook! 'Jem z vilicami.' = I eat with a fork.",
    words: [["lonec","pot"],["ponev","pan"],["nož","knife"],["vilice","fork"],["žlica","spoon"],["krožnik","plate"],["skodelica","cup"],["štedilnik","stove"]],
    sentences: [["Skuhaj juho!","Cook the soup!"],["Jem z vilicami.","I eat with a fork."],["Lonec je na štedilniku.","The pot is on the stove."]] },
  { name: "Nature", tip: "'Grem v gozd' = I'm going into the forest ('v' + accusative).",
    words: [["drevo","tree"],["roža","flower"],["trava","grass"],["gora","mountain"],["reka","river"],["morje","sea"],["jezero","lake"],["gozd","forest"],["nebo","sky"]],
    sentences: [["Grem v gozd.","I'm going into the forest."],["Reka je lepa.","The river is beautiful."],["Gledam nebo.","I'm looking at the sky."]] },
  { name: "Fruit & vegetables", tip: "'Kupi zelenjavo' = Buy vegetables (fresh at the market!).",
    words: [["hruška","pear"],["banana","banana"],["pomaranča","orange"],["grozdje","grapes"],["krompir","potato"],["korenje","carrot"],["čebula","onion"],["paradižnik","tomato"],["kumara","cucumber"]],
    sentences: [["Jem jabolko.","I'm eating an apple."],["Kupi zelenjavo.","Buy vegetables."],["Grozdje je sladko.","Grapes are sweet."]] },
  { name: "Meals", tip: "'Skuham juho' = I'm cooking soup; 'juha' is a classic Slovenian soup.",
    words: [["meso","meat"],["piščanec","chicken"],["riba","fish"],["riž","rice"],["juha","soup"],["solata","salad"],["sendvič","sandwich"],["sladica","dessert"]],
    sentences: [["Skuham juho.","I'm cooking soup."],["Rad jem ribo.","I like eating fish."],["Za sladico jem torto.","For dessert I eat cake."]] },
  { name: "More drinks", tip: "'Naročim kozarec vina' = I order a glass of wine.",
    words: [["sok","juice"],["vino","wine"],["žganje","brandy / rakija"],["koktajl","cocktail"]],
    sentences: [["Naročim kozarec vina.","I order a glass of wine."],["Sok je svež.","The juice is fresh."],["Pijem čaj.","I drink tea."]] },
  { name: "Family 2", tip: "Diminutives: 'sinček' = little son. 'Vnuk/vnukinja' = grandson/granddaughter.",
    words: [["sin","son"],["hči","daughter"],["vnuk","grandson"],["vnukinja","granddaughter"],["stric","uncle"],["teta","aunt"],["bratranec","cousin"]],
    sentences: [["Imam dva otroka.","I have two children."],["Moj sin je pameten.","My son is smart."],["Teta živi v mestu.","My aunt lives in the city."]] },
  { name: "Rooms of the house", tip: "'Spi v spalnici' = He/she sleeps in the bedroom.",
    words: [["spalnica","bedroom"],["kuhinja","kitchen"],["dnevna soba","living room"],["kopalnica","bathroom"],["garaža","garage"],["balkon","balcony"],["vrt","garden"],["dvorišče","yard"]],
    sentences: [["Spim v spalnici.","We sleep in the bedroom."],["Kuhinja je velika.","The kitchen is big."],["Sedimo na balkonu.","We're sitting on the balcony."]] },
  { name: "Travel 2", tip: "'Imamo rezervacijo' = We have a reservation.",
    words: [["letališče","airport"],["hotel","hotel"],["kamp","campsite"],["potovanje","trip"],["zemljevid","map"],["navigacija","navigation"],["carina","customs"]],
    sentences: [["Pristanemo na letališču.","We land at the airport."],["Imamo rezervacijo v hotelu.","We have a hotel reservation."],["Pokaži zemljevid!","Show the map!"]] },
  { name: "Questions", tip: "Question words: kaj (what), kdo (who), kje (where), kdaj (when), zakaj (why), koliko (how much), kako (how).",
    words: [["kaj","what"],["kdo","who"],["kje","where"],["kdaj","when"],["zakaj","why"],["koliko","how much"],["kako","how"]],
    sentences: [["Kaj je to?","What is this?"],["Kdo si ti?","Who are you?"],["Koliko stane?","How much does it cost?"]] },
  { name: "Prepositions", tip: "Prepositions change the case: 'na mizi' (on the table), 'pod drevesom' (under the tree).",
    words: [["v","in / into"],["na","on"],["pod","under"],["nad","above"],["pred","in front of"],["za","behind"],["med","between"],["blizu","near"],["daleč","far"]],
    sentences: [["Knjiga je na mizi.","The book is on the table."],["Sedim pod drevesom.","I'm sitting under the tree."],["Hiša je blizu reke.","The house is near the river."]] },
  { name: "Adjectives", tip: "Adjectives agree with the noun's gender: 'lep dan' (masc.), 'lepa hiša' (fem.).",
    words: [["velik","big"],["majhen","small"],["lep","beautiful"],["grd","ugly"],["pameten","smart"],["prijazen","kind"],["hiter","fast"],["počasen","slow"],["nov","new"],["star","old"]],
    sentences: [["To je lep dan.","It's a beautiful day."],["Avto je hiter.","The car is fast."],["Hiša je velika.","The house is big."]] },
  { name: "Common verbs 1", tip: "'Biti' (to be): jaz sem, ti si, on/ona je, mi smo, vi ste, oni so.",
    words: [["biti","to be"],["imeti","to have"],["delati","to do / work"],["iti","to go"],["videti","to see"],["slišati","to hear"],["govoriti","to speak"],["brati","to read"],["pisati","to write"]],
    sentences: [["Jaz sem srečen.","I am happy."],["Imam telefon.","I have a phone."],["Grem domov.","I'm going home."]] },
  { name: "Common verbs 2", tip: "'Kupiti' (to buy), 'odpreti' (to open), 'začeti' (to start).",
    words: [["kupiti","to buy"],["prodati","to sell"],["odpreti","to open"],["zapreti","to close"],["začeti","to start"],["končati","to finish"],["ljubiti","to love"],["čakati","to wait"]],
    sentences: [["Kupim kruh.","I'll buy bread."],["Odpri vrata!","Open the door!"],["Začnimo!","Let's start!"]] },
  { name: "Numbers 6–20", tip: "Count: šest, sedem, osem, devet, deset… dvajset (20).",
    words: [["šest","six"],["sedem","seven"],["osem","eight"],["devet","nine"],["deset","ten"],["enajst","eleven"],["dvanajst","twelve"],["trinajst","thirteen"],["štirinajst","fourteen"],["petnajst","fifteen"],["šestnajst","sixteen"],["sedemnajst","seventeen"],["osemnajst","eighteen"],["devetnajst","nineteen"],["dvajset","twenty"]],
    sentences: [["Imam deset prstov.","I have ten fingers."],["Štejem do dvajset.","I count to twenty."]] },
  { name: "Time words", tip: "'Jutri' = tomorrow, 'včeraj' = yesterday, 'zdaj' = now.",
    words: [["prvi","first"],["drugi","second"],["tretji","third"],["zadnji","last"],["jutri","tomorrow"],["včeraj","yesterday"],["danes","today"],["zdaj","now"]],
    sentences: [["Jutri grem.","I'm going tomorrow."],["Včeraj sem bil doma.","Yesterday I was at home."],["Zdaj grem.","I'm going now."]] },
  { name: "Work & money", tip: "'Služba' = job, 'plača' = salary, 'račun' = bill/invoice.",
    words: [["služba","job"],["plača","salary"],["račun","bill"],["pogodba","contract"],["šef","boss"],["sestanek","meeting"]],
    sentences: [["Imam novo službo.","I have a new job."],["Plača je dobra.","The salary is good."],["Imamo sestanek ob desetih.","We have a meeting at ten."]] },
  { name: "Emergencies", tip: "112 is the EU emergency number — works everywhere in Europe.",
    words: [["pomoč","help"],["klicati","to call"],["112","emergency number"],["ogenj","fire"],["nesreča","accident"]],
    sentences: [["Pokliči pomoč!","Call for help!"],["Ogenj! Pokličite 112!","Fire! Call 112!"]] },
  { name: "Holidays", tip: "'Vesele praznike!' = Happy holidays!",
    words: [["božič","Christmas"],["novo leto","New Year"],["velika noč","Easter"],["rojstni dan","birthday"],["praznik","holiday"]],
    sentences: [["Vesele božične praznike!","Merry Christmas!"],["Danes je moj rojstni dan.","Today is my birthday."]] },
  { name: "At the restaurant 2", tip: "'Natakar, račun prosim!' = Waiter, the bill please!",
    words: [["natakar","waiter"],["naročilo","order"],["priporočilo","recommendation"],["začimba","spice"]],
    sentences: [["Natakar, račun prosim!","Waiter, the bill please!"],["Naročim juho.","I'll order the soup."],["Kaj priporočate?","What do you recommend?"]] },
  { name: "Politeness", tip: "The magic words: prosim (please), hvala (thank you), oprosti (sorry).",
    words: [["dober dan","good day"],["na svidenje","goodbye"],["dobrodošli","welcome"],["hvala lepa","thank you very much"],["prosim, vstopite","please, come in"]],
    sentences: [["Dober dan!","Good day!"],["Na svidenje!","Goodbye!"],["Hvala lepa!","Thank you very much!"]] },
  { name: "Around the home 2", tip: "Diminutives soften everything: 'hišica' = little house.",
    words: [["hiša","house"],["stanovanje","apartment"],["hišica","little house"],["zgradba","building"],["dvigalo","elevator"],["stopnice","stairs"],["streha","roof"],["dimnik","chimney"]],
    sentences: [["Živim v stanovanju.","I live in an apartment."],["Hiša ima veliko streho.","The house has a big roof."],["Grem po stopnicah.","I'm going up the stairs."]] },
  { name: "At the doctor 2", tip: "'Kaj vas boli?' = What hurts you? — the doctor will ask this.",
    words: [["glavobol","headache"],["kašelj","cough"],["gripa","flu"],["zobobol","toothache"],["prehlad","cold"],["zlom","fracture"],["obliž","band-aid"]],
    sentences: [["Imam glavobol.","I have a headache."],["Kašljam.","I'm coughing."],["Imam vročino.","I have a fever."]] }
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
  const rng = mulberry32(1000 + ti * 77);
  const slPool = topic.words.map(w => w[0]);
  const enPool = topic.words.map(w => w[1]);
  const lessons = [];

  function vocabLesson(idx, title, words) {
    const ex = [];
    words.forEach((w, i) => {
      const enToSl = (i + ti) % 2 === 0;
      const pool = enToSl ? enPool : slPool;
      const answer = enToSl ? w[0] : w[1];
      const prompt = enToSl ? w[1] : w[0];
      ex.push({
        type: "choice", dir: enToSl ? "en-sl" : "sl-en", prompt,
        options: sample(rng, [answer, ...pickDistractors(rng, pool, answer, 3)], 4),
        answer
      });
    });
    const pairs = sample(rng, topic.words, 4).map(w => [w[1], w[0]]);
    ex.push({ type: "match", prompt: "Match the pairs", pairs });
    const s = topic.sentences[idx % topic.sentences.length];
    ex.push({
      type: "words", dir: "en-sl", prompt: s[1],
      bank: sample(rng, [...s[0].replace(/[.!?,]/g, "").split(" "), ...pickDistractors(rng, slPool, s[0], 2)], 99),
      answer: s[0].replace(/[.!?,]/g, "")
    });
    return { id: "g" + ti + "l" + idx, title, exercises: ex };
  }

  function sentenceLesson(idx, title) {
    const ex = [];
    topic.sentences.forEach((s, i) => {
      const enToSl = (i + ti) % 2 === 0;
      const pool = enToSl ? enPool.concat(topic.sentences.map(x => x[1])) : slPool.concat(topic.sentences.map(x => x[0]));
      const answer = enToSl ? s[0] : s[1];
      const prompt = enToSl ? s[1] : s[0];
      ex.push({
        type: "choice", dir: enToSl ? "en-sl" : "sl-en", prompt,
        options: sample(rng, [answer, ...pickDistractors(rng, pool, answer, 3)], 4),
        answer
      });
    });
    const s = topic.sentences[idx % topic.sentences.length];
    ex.push({
      type: "words", dir: "en-sl", prompt: s[1],
      bank: sample(rng, [...s[0].replace(/[.!?,]/g, "").split(" "), ...pickDistractors(rng, slPool, s[0], 2)], 99),
      answer: s[0].replace(/[.!?,]/g, "")
    });
    ex.push({ type: "listen", prompt: "Type what you hear", answer: s[0], hint: s[1] });
    const w = topic.words[idx % topic.words.length];
    ex.push({
      type: "fill", sentence: "To je ___.", gloss: w[1],
      options: sample(rng, [w[0], ...pickDistractors(rng, slPool, w[0], 3)], 4), answer: w[0]
    });
    return { id: "g" + ti + "l" + idx, title, exercises: ex };
  }

  const w1 = topic.words.slice(0, 5);
  const w2 = topic.words.slice(5, 10);
  lessons.push(vocabLesson(0, topic.name + " — words 1", w1));
  lessons.push(vocabLesson(1, topic.name + " — words 2", w2.length ? w2 : topic.words.slice(0, 5)));
  lessons.push(sentenceLesson(2, topic.name + " — in sentences"));
  return {
    id: "gu" + ti, title: "Unit " + (UNITS.length + ti + 1) + " · " + topic.name,
    description: topic.name.toLowerCase() + " vocabulary", color: ["#58cc02", "#1cb0f6", "#ce82ff", "#ff9600", "#ff4b4b", "#00cd9c"][ti % 6],
    tip: topic.tip, lessons
  };
}

for (let i = 0; i < TOPICS.length; i++) UNITS.push(genTopicUnit(TOPICS[i], i));
