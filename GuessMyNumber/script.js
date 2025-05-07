let score = 20; // Global default score
let highscore = 0; // Global record score

// this is array with 1-20
const randomNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// this function return random number from array
function getNum() {
  const randomIndex = Math.floor(Math.random() * randomNums.length);
  const takenNum = randomNums[randomIndex];
  return takenNum;
}
let numberToGuess = getNum();
console.log(numberToGuess);

// this huge function is doing checkings
function numComparison() {
  const inputValue = document.getElementById("personsNum").value;
  const startGuessingTxt = document.getElementById("Guessing");
  const converted = Number(inputValue);
  console.log("input:", converted);

  // this happens when user guess the number
  if (converted === numberToGuess) {
    document.body.style.backgroundColor = "green";
    document.getElementById("question-box").innerHTML = numberToGuess;
    document.getElementById("Guessing").innerHTML = "Correct Number!";
    document.getElementById("checkbutton").disabled = true;
    document.getElementById("personsNum").disabled = true;

    // this if comparison score and highscore if user gets new record this record will be presented
    if (score > highscore) {
      highscore = score;
      updateHighScore();
    }
  }
  // this happens when user can not guess the number and also points how close is
  else if (converted > numberToGuess) {
    startGuessingTxt.textContent = "Too high!";

    // this if minus one number until zero
    if (score > 0) {
      score--;
    } else if (score === 0) {
      startGuessingTxt.textContent = "You lost the game!";
    }
  } else {
    startGuessingTxt.textContent = "Too low!";
    document.getElementById("question-box").innerHTML = "?";
    if (score > 0) {
      score--;
    } else if (score === 0) {
      startGuessingTxt.textContent = "You lost the game!";
    }
  }

  // this always updates score on ui when check button is clicked
  updateScore();
}

// this function creates score txt with current  score
function updateScore() {
  document.getElementById("score").innerHTML = `Score: ${score}`;
}
updateScore();

// this function creates highscore with current score
function updateHighScore() {
  document.getElementById("highscore").innerHTML = `Highscore: ${highscore}`;
}
updateHighScore();

// this function resets game but keeps high score
function refreshPage() {
  numberToGuess = getNum();
  document.getElementById("personsNum").value = "";
  document.getElementById("question-box").innerHTML = "?";
  document.body.style.backgroundColor = "#222222";
  score = 20;
  updateScore();

  document.getElementById("checkbutton").disabled = false;
  document.getElementById("personsNum").disabled = false;
}
