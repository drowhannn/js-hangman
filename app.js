letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let randomwords = [
  "madrigals",
  "sprig",
  "collyria",
  "banisters",
  "zorilles",
  "rekeys",
  "syphering",
  "forejudges",
  "wiseass",
  "wetsuit",
  "territories",
  "xenodiagnoses",
  "santalols",
  "recycle",
  "warthogs",
  "embosomed",
  "pardine",
  "intermolecular",
  "mildest",
  "pharyngals",
  "indicates",
  "shamanists",
  "ichthyofaunas",
  "pearlescent",
  "guides",
  "frizzle",
  "fullered",
  "antisexual",
  "nucleates",
  "angiographic",
  "utopists",
  "handoff",
  "shoeless",
  "synapses",
  "synergias",
  "dupers",
  "cadastral",
  "clued",
  "tourer",
  "register",
  "clambakes",
  "maritally",
  "handinesses",
  "trireme",
  "roentgenogram",
  "tweaks",
  "napiform",
  "monkeypot",
  "salinometer",
  "corybants",
  "daybreak",
  "underarm",
  "cigars",
  "coacervation",
  "jeton",
  "impercipiences",
  "trapezial",
  "overplaids",
  "neurilemmas",
  "dilater",
  "bivalence",
  "concealingly",
  "choked",
  "longevities",
  "monetise",
  "griminesses",
  "precative",
  "tip",
  "survivances",
  "exacting",
  "trike",
  "hemophiliacs",
  "statists",
  "antepenultimas",
  "prenotifying",
  "misconnections",
  "dollishnesses",
  "preachier",
  "diminuendos",
  "aminoacidurias",
  "nonobjectivism",
  "tentacular",
  "kists",
  "cellaret",
  "haircuttings",
  "allopolyploid",
  "phencyclidine",
  "wingman",
  "civilized",
  "baseness",
  "banksia",
  "overdue",
  "certificated",
  "sialids",
  "derisions",
  "nereis",
  "irritancy",
  "actionably",
  "shirtdresses",
  "retarding",
];
let correctWord = randomwords[Math.floor(Math.random() * 100)]; //0-0.99

let mistakes = 0,
  corrects = 0;
let figureParts = document.getElementsByClassName("figure__part");
// console.log(figureParts);

let incorrectLetters = "";

const checkWord = (e) => {
  let isIncorrect = true;
  let clickedLetter = e.target.innerHTML;
  let letterSpans = document.querySelectorAll("span");
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === clickedLetter) {
      letterSpans[i].innerHTML = clickedLetter;
      isIncorrect = false;
      corrects++;
    }
  }
  if (isIncorrect) {
    document.getElementById("incorrect__letters").innerHTML +=
      " " + clickedLetter;
    figureParts[mistakes].style.display = "block";
    mistakes++;
    if (mistakes === 6)
      document.getElementById("alertContainer").style.display = "block";
  } else {
    if (corrects === correctWord.length) {
      document.getElementById("alertH1").innerHTML = "You Win!";
      document.getElementById("alertContainer").style.display = "block";
    }
  }

  e.target.disabled = true;
};

let lettersContainer = document.getElementById("letters__container");
letters.forEach((letter) => {
  let btn = document.createElement("button");
  btn.innerHTML = letter;
  btn.addEventListener("click", checkWord);
  lettersContainer.appendChild(btn);
});

let wordContainer = document.getElementById("word__container");
for (i = 0; i < correctWord.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = "_";
  wordContainer.appendChild(span);
}
