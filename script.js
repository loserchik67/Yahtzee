'use strict';

const btnRoll = document.getElementById('roll');
const btnNewGame = document.getElementById('new');
const btnHold1 = document.getElementById('hold1');
const btnHold2 = document.getElementById('hold2');
const btnHold3 = document.getElementById('hold3');
const btnHold4 = document.getElementById('hold4');
const btnHold5 = document.getElementById('hold5');
const diceEl1 = document.getElementById('dice1img');
const diceEl2 = document.getElementById('dice2img');
const diceEl3 = document.getElementById('dice3img');
const diceEl4 = document.getElementById('dice4img');
const diceEl5 = document.getElementById('dice5img');
const startMessage = document.querySelector('.start');

// if it is being held and the value of the dice face
let rollCount = 0;
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let hold1 = false;
let hold2 = false;
let hold3 = false;
let hold4 = false;
let hold5 = false;
let playing = true;
let notStarted = true;

let roll = function () {
  if (rollCount < 3) {
    if (!hold1) {
      dice1 = Math.floor(Math.random() * 6 + 1);
      diceEl1.src = `dice-${dice1}.png`;
    }
    if (!hold2) {
      dice2 = Math.floor(Math.random() * 6 + 1);
      diceEl2.src = `dice-${dice2}.png`;
    }
    if (!hold3) {
      dice3 = Math.floor(Math.random() * 6 + 1);
      diceEl3.src = `dice-${dice3}.png`;
    }
    if (!hold4) {
      dice4 = Math.floor(Math.random() * 6 + 1);
      diceEl4.src = `dice-${dice4}.png`;
    }
    if (!hold5) {
      dice5 = Math.floor(Math.random() * 6 + 1);
      diceEl5.src = `dice-${dice5}.png`;
    }
    rollCount++;
    console.log(dice1, dice2, dice3, dice4, dice5);
  }
};

const unhold = function () {
  if (rollCount >= 3) {
    hold1 = false;
    hold2 = false;
    hold3 = false;
    hold4 = false;
    hold5 = false;
    diceEl1.src = `dice-${dice1}.png`;
    diceEl2.src = `dice-${dice2}.png`;
    diceEl3.src = `dice-${dice3}.png`;
    diceEl4.src = `dice-${dice4}.png`;
    diceEl5.src = `dice-${dice5}.png`;
    btnHold1.textContent = 'hold';
    btnHold2.textContent = 'hold';
    btnHold3.textContent = 'hold';
    btnHold4.textContent = 'hold';
    btnHold5.textContent = 'hold';
  }
};

btnNewGame.addEventListener('click', function () {
  rollCount = 0;
  unhold();
});

btnRoll.addEventListener('click', function () {
  notStarted = false;
  if (!notStarted) {
    startMessage.classList.add('hidden');
    btnNewGame.classList.remove('hidden');
  }
  roll();
  unhold();
});

btnHold1.addEventListener('click', function () {
  console.log('pressed hold1');
  if (dice1 !== 0 && rollCount < 3) {
    if (!hold1) {
      hold1 = true;
      diceEl1.src = `dice-${dice1}-hold.png`;
      btnHold1.textContent = 'held';
    } else {
      hold1 = false;
      diceEl1.src = `dice-${dice1}.png`;
      btnHold1.textContent = 'hold';
    }
  }
});

btnHold2.addEventListener('click', function () {
  console.log('pressed hold2');
  if (dice2 !== 0 && rollCount < 3) {
    if (!hold2) {
      hold2 = true;
      diceEl2.src = `dice-${dice2}-hold.png`;
      btnHold2.textContent = 'held';
    } else {
      hold2 = false;
      diceEl2.src = `dice-${dice2}.png`;
      btnHold2.textContent = 'hold';
    }
  }
});

btnHold3.addEventListener('click', function () {
  console.log('pressed hold3');
  if (dice3 !== 0 && rollCount < 3) {
    if (!hold3) {
      hold3 = true;
      diceEl3.src = `dice-${dice3}-hold.png`;
      btnHold3.textContent = 'held';
    } else {
      hold3 = false;
      diceEl3.src = `dice-${dice3}.png`;
      btnHold3.textContent = 'hold';
    }
  }
});
btnHold4.addEventListener('click', function () {
  console.log('pressed hold4');
  if (dice4 !== 0 && rollCount < 3) {
    if (!hold4) {
      hold4 = true;
      diceEl4.src = `dice-${dice4}-hold.png`;
      btnHold4.textContent = 'held';
    } else {
      hold4 = false;
      diceEl4.src = `dice-${dice4}.png`;
      btnHold4.textContent = 'hold';
    }
  }
});
btnHold5.addEventListener('click', function () {
  console.log('pressed hold5');
  if (dice5 !== 0 && rollCount < 3) {
    if (!hold5) {
      hold5 = true;
      diceEl5.src = `dice-${dice5}-hold.png`;
      btnHold5.textContent = 'held';
    } else {
      hold5 = false;
      diceEl5.src = `dice-${dice5}.png`;
      btnHold5.textContent = 'hold';
    }
  }
});
