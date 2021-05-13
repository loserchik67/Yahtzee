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

//submit buttons
const btnOnes = document.getElementById('btnOnes');
const btnTwos = document.getElementById('btnTwos');
const btnThrees = document.getElementById('btnThrees');
const btnFourss = document.getElementById('btnFours');
const btnFives = document.getElementById('btnFives');
const btnSixes = document.getElementById('btnSixes');

//score trackers
let oneScore = 0;
let twoScore = 0;
let threeScore = 0;
let fourScore = 0;
let fiveScore = 0;
let sixScore = 0;
let totalScore = 0;
let oneSubmit = false;
let twoSubmit = false;
let threeSubmit = false;
let fourSubmit = false;
let fiveSubmit = false;
let sixSubmit = false;
const totalScoreText = document.querySelector('.total-score-text2');
const onesText = document.getElementById('ones-score');
const twosText = document.getElementById('twos-score');
const threesText = document.getElementById('threes-score');
const foursText = document.getElementById('fours-score');
const fivesText = document.getElementById('fives-score');
const sixesText = document.getElementById('sixes-score');

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
let hasRolled = false;

//reset hold buttons and dice images
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

// after they press submit allow them to make a new roll
let newRoll = function () {
  rollCount = 0;
  hasRolled = false;
  //reset dice values to relock the hold buttons
  dice1 = 0;
  dice2 = 0;
  dice3 = 0;
  dice4 = 0;
  dice5 = 0;
};
//start a new game
btnNewGame.addEventListener('click', function () {
  oneScore = 0;
  twoScore = 0;
  threeScore = 0;
  fourScore = 0;
  fiveScore = 0;
  sixScore = 0;
  unhold();
  newRoll();
  startMessage.classList.remove('hidden');
  btnNewGame.classList.add('hidden');

  //reset scores
  totalScoreText.textContent = 0;
  onesText.textContent = 'Score: -';
  twosText.textContent = 'Score: -';
  threesText.textContent = 'Score: -';
  foursText.textContent = 'Score: -';
  fivesText.textContent = 'Score: -';
  sixesText.textContent = 'Score: -';
});

let roll = function () {
  hasRolled = true;
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

//create and sort an array
const makeArray = function () {
  //populate the array with dice values
  let diceArray = [dice1, dice2, dice3, dice4, dice5];
  //sort the array
  let sortedArray = diceArray.sort();
  console.log(sortedArray);
  return sortedArray;
};

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

//submit buttons
btnOnes.addEventListener('click', function () {
  if (!oneSubmit && hasRolled) {
    oneSubmit = true;
    const onesArray = makeArray();
    for (let i = 0; i < onesArray.length; i++) {
      if (onesArray[i] === 1) {
        oneScore += 1;
      }
    }
    onesText.textContent = `Score: ${oneScore}`;
    totalScore += oneScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});

btnTwos.addEventListener('click', function () {
  if (!twoSubmit && hasRolled) {
    twoSubmit = true;
    const twosArray = makeArray();
    for (let i = 0; i < twosArray.length; i++) {
      if (twosArray[i] === 2) {
        twoScore += 2;
      }
    }
    twosText.textContent = `Score: ${twoScore}`;
    totalScore += twoScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});

btnThrees.addEventListener('click', function () {
  if (!threeSubmit && hasRolled) {
    threeSubmit = true;
    const threesArray = makeArray();
    for (let i = 0; i < threesArray.length; i++) {
      if (threesArray[i] === 3) {
        threeScore += 3;
      }
    }
    threesText.textContent = `Score: ${threeScore}`;
    totalScore += threeScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});

btnFours.addEventListener('click', function () {
  if (!fourSubmit && hasRolled) {
    fourSubmit = true;
    const foursArray = makeArray();
    for (let i = 0; i < foursArray.length; i++) {
      if (foursArray[i] === 4) {
        fourScore += 4;
      }
    }
    foursText.textContent = `Score: ${fourScore}`;
    totalScore += fourScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});

btnFives.addEventListener('click', function () {
  if (!fiveSubmit && hasRolled) {
    fiveSubmit = true;
    const fivesArray = makeArray();
    for (let i = 0; i < fivesArray.length; i++) {
      if (fivesArray[i] === 5) {
        fiveScore += 5;
      }
    }
    fivesText.textContent = `Score: ${fiveScore}`;
    totalScore += fiveScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});

btnSixes.addEventListener('click', function () {
  if (!sixSubmit && hasRolled) {
    sixSubmit = true;
    const sixesArray = makeArray();
    for (let i = 0; i < sixesArray.length; i++) {
      if (sixesArray[i] === 6) {
        sixScore += 6;
      }
    }
    sixesText.textContent = `Score: ${sixScore}`;
    totalScore += sixScore;
    totalScoreText.textContent = totalScore;
    rollCount = 3;
    newRoll();
    unhold();
  }
});
