// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👏Graete Number!';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heightScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When Guess Not Found
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number🙂';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎁';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > heightScore) {
      heightScore = score;
      document.querySelector('.highscore').textContent = heightScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'OPPS! You Loss The Game';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Height';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'OPPS! You Loss The Game';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
