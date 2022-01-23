'use strict';

/* Global variables */
let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

/* buttons */
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

/* checkBtn event handler */
if (score >= 1) {
  checkBtn.addEventListener('click', function () {
    checkGuess();
  });
}

/* againBtn event handler : reset to initial values*/
againBtn.addEventListener('click', function () {
  number = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').innerText = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.borderRadius = '0.2rem';
  document.querySelector('.score').innerText = score;
  againBtn.style.backgroundColor = 'grey';
  checkBtn.style.backgroundColor = 'rgba(14, 166, 177, 0.575)';
  checkBtn.innerText = 'Check!';
  checkBtn.classList.remove('btn-disable');
  document.querySelector('.guess').value = '';
});

/*------------- FUNCTIONS ------------------------*/

/* check the guessed number  */
function checkGuess() {
  let guessNumber = Number(document.querySelector('.guess').value);
  // no valid number :
  if ((guessNumber < 1 || guessNumber > 20) && score > 0) {
    displayMessage('⛔enter a number between 1 and 20');
  }
  // correct guess :
  else if (number === guessNumber) {
    document.querySelector('.number').innerText = String(number);
    displayMessage('🎉correct guess🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.borderRadius = '3rem';
    checkBtn.innerText = 'you win';
    checkBtn.style.backgroundColor = 'grey';
    checkBtn.style.color = 'white';
    againBtn.style.backgroundColor = 'blue';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highScore').innerText = highScore;
    }
  }
  // wrong guess :
  else if (number !== guessNumber) {
    score -= 1;
    document.querySelector('.score').innerText = score;
    score < 1
      ? loser()
      : displayMessage(guessNumber > number ? '📈 too high' : '📉 too low');
  }
  return score;
}

/* display message */
function displayMessage(msg) {
  return (document.querySelector('.message').innerText = msg);
}

/* in case of losing : score=0 */
function loser() {
  if (score < 1) {
    checkBtn.innerText = 'you lost';
    displayMessage('😥You lose😥');
    checkBtn.classList.add('btn-disable');
    checkBtn.style.backgroundColor = '#cc1111c2';
    checkBtn.style.color = '#8b7f7f';
    againBtn.style.backgroundColor = 'blue';
  }
}
