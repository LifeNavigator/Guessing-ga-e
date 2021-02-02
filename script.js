'use strict';

let message = document.querySelector('.message');
let userNum = document.querySelector('.guess').value;
//console.log(userNum);
let inputBox = document.querySelector('.guess');

let hiddenNum = document.querySelector('.number');

let score = 20;
let scoreUpdate = document.querySelector('.score');
let mainTitle = document.getElementById("main-title");
let background = document.body.style;
let number;
let highScore = 0;
//document.querySelector('.highscore')

function numberGen() {
  number = Math.trunc(Math.random() * 20) + 1;
  return number;
}
numberGen();
console.log(number);
// hiddenNum.textContent = String(number);

/* for variable guess, if outside of the click event handler, it runs ONLY once, 
when the page loads. So when the user clicks, there is no value yet and there 
won't be any val 
*/

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = "No number was entered";

  } else if (guess < 0 || guess > 20) {
    message.textContent = "Your number is not within range!";

  } else if (guess === 0) {
    message.textContent = "Your guess has to be greater than 0";

  } else if (guess < number) {
    message.textContent = "Your guess is too low!";
    score--;
    console.log(score);
    scoreUpdate.textContent = String(score);

  } else if (guess > number) {
    message.textContent = "Your guess is too high!";
    score--;
    console.log(score);
    scoreUpdate.textContent = String(score);

  } else if (guess === number) {
    message.textContent = "You've guessed correctly!";
    score++;
    hiddenNum.textContent = String(number);
    scoreUpdate.textContent = String(score);
    mainTitle.textContent = "Congratulations!";
    background.backgroundColor = '#228B22';
    highestScore();
  };
});

//Reset button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = "";
  numberGen();
  hiddenNum.textContent = "?";
  background.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  mainTitle.textContent = "Guess My Number!";
  score = 20;
  scoreUpdate.textContent = String(score);
})

//highscore function

function highestScore() {
  if (score > highScore) {
    highScore = score;
    let updateHighscore = document.querySelector('.highscore');
    updateHighscore.textContent = highScore;
    console.log(highScore)
  }
}