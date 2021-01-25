'use strict';
/* Plan for this:
 1. Create new variables with DOM selectors this would be for
   - between text
   - Score (class: score )
   - Button reset (class: btn again)
   - Button submit (class: .btn check)
   - input field (Class: guess)
   - number reveal box  (class: number)

2. Create a random number generator that generates numbers between 1 -20
3. Loops for which if entered guess != number a message is given
  - checks if condition is a number
  - check for negatives 
  - checks for smaller or bigger

4. New variable that keeps track of score.
 */


let message = document.querySelector('.message');
let userNum = document.querySelector('.guess').value;
//console.log(userNum);
let inputBox = document.querySelector('.guess');

let hiddenNum = document.querySelector('.number');

let score = 20;
let scoreUpdate = document.querySelector('.score');


const number = Math.trunc(Math.random() * 20) + 1;
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
    scoreUpdate.textContent = score;
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
    document.getElementById("main-title").textContent = "Congratulations!";
    document.body.style.backgroundColor = '#228B22';
    // testing to see if it'll push to main branch
  }; 
});

// function correct() {
//   document.getElementById("main-title").textContent = "Congratulations!";
//   document.body.style.backgroundColor = '#228B22';
// }