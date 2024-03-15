'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const curScore0El = document.querySelector('#current--0');
const curScore1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
let currentScore, score1, score2, score, activePlayer;
let playing;
const init = function () {
  currentScore = 0;
  score = 0;
  score1 = 0;
  score2 = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curScore0El.textContent = 0;
  curScore1El.textContent = 0;
  dice.classList.add('hidden');

  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
init();
holdBtn.addEventListener('click', function () {
  if (playing) {
    score =
      activePlayer === 0 ? (score1 += currentScore) : (score2 += currentScore);
    document.getElementById(`score--${activePlayer}`).textContent = score;
    if (score >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', function () {
  init();
});
//her roll butonuna tıkladığında gerçekleşir

rollBtn.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  switching player
      switchPlayer();
    }
  }
});
