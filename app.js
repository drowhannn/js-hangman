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

let word = rohandhimal;

let mistakes = 0;
let figureParts = document.getElementsByClassName("figure__part");
console.log(figureParts);

let incorrectLetters = "";

const checkWord = (e) => {
  let isIncorrect = true;
  let clickedLetter = e.target.innerHTML;
  let letterSpans = document.querySelectorAll("span");
  for (i = 0; i < word.length; i++) {
    if (word[i] === clickedLetter) {
      letterSpans[i].innerHTML = clickedLetter;
      isIncorrect = false;
    }
  }
  if (isIncorrect) {
    document.getElementById("incorrect__letters").innerHTML +=
      " " + clickedLetter;
    figureParts[mistakes].style.display = "block";
    mistakes++;
    if (mistakes === 5) alert("Game Over");
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
for (i = 0; i < word.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = "";
  wordContainer.appendChild(span);
}
