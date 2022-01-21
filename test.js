'use strict';

//selectors

const numPlace = document.querySelector('.random-number');
const checkBtn = document.querySelector('.guess-btn');
const numInput = document.querySelector('.num-input');
const msgGuide = document.querySelector('.msg-guide');
const highScore = document.querySelector('.my-score');
const turnsLeft = document.querySelector('.my-turns');
const startAgain = document.querySelector('.restart');

const getRandomNumber = function () {
  return Math.floor(Math.random() * 20);
};

window.addEventListener('DOMContentLoaded', function () {
  numPlace.innerHTML = getRandomNumber();
  startAgain.classList.add('go-down');
});

let checkNumber = function () {
  let myNum = Number(numPlace.textContent);
  let valueIn = numInput.value;
  let changeGuide = msgGuide.innerHTML;

  if (valueIn === null || valueIn === '') {
    msgGuide.innerHTML = 'input something';
    msgGuide.style.color = 'black';
  } else if (valueIn > myNum) {
    msgGuide.innerHTML = 'go low';
    msgGuide.style.color = 'black';
  } else if (valueIn < myNum) {
    msgGuide.innerHTML = 'go high';
    msgGuide.style.color = 'black';
  } else {
    msgGuide.innerHTML = 'you have guessed it!';
    msgGuide.style.color = 'green';
    if (Number(highScore.innerHTML) < Number(turnsLeft.innerHTML)) {
      highScore.innerHTML = turnsLeft.innerHTML;
    }
    checkBtn.classList.add('stop-action');
    startAgain.classList.remove('go-down');
  }

  if (turnsLeft.innerHTML === '0') {
    checkBtn.classList.add('stop-action');
    startAgain.classList.remove('go-down');
  }
};

let countTurn = turnsLeft.innerHTML;

checkBtn.addEventListener('click', function () {
  checkNumber();
  if (numInput.value !== null && numInput.value !== '') {
    countTurn--;
  }

  turnsLeft.innerHTML = countTurn;
});

//restart the game

startAgain.addEventListener('click', function () {
  if (checkBtn.classList.contains('stop-action')) {
    countTurn = 20;
    checkBtn.classList.remove('stop-action');
    startAgain.classList.add('go-down');
    numInput.value = '';
    msgGuide.innerHTML = '';
    turnsLeft.innerHTML = countTurn;
    numPlace.innerHTML = Math.floor(Math.random() * 20);
  }
});
