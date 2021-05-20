'use strict';

const btnRoll = document.getElementById('roll');
const btnNewGame = document.getElementById('new');
const startMessage = document.querySelector('.start');
const won = document.querySelector('.win');

//hold buttons
const btnHold1 = document.getElementById('hold1');
const btnHold2 = document.getElementById('hold2');
const btnHold3 = document.getElementById('hold3');
const btnHold4 = document.getElementById('hold4');
const btnHold5 = document.getElementById('hold5');

//dice
const diceEl1 = document.getElementById('dice1img');
const diceEl2 = document.getElementById('dice2img');
const diceEl3 = document.getElementById('dice3img');
const diceEl4 = document.getElementById('dice4img');
const diceEl5 = document.getElementById('dice5img');

//submit buttons
const btnOnes = document.getElementById('btnOnes');
const btnTwos = document.getElementById('btnTwos');
const btnThrees = document.getElementById('btnThrees');
const btnFourss = document.getElementById('btnFours');
const btnFives = document.getElementById('btnFives');
const btnSixes = document.getElementById('btnSixes');

const btnThreeKind = document.getElementById('btnThreeKind');
const btnFourKind = document.getElementById('btnFourKind');
const btnFullHouse = document.getElementById('btnFullHouse');
const btnSmStraight = document.getElementById('btnSmStraight');
const btnLgStraight = document.getElementById('btnLgStraight');
const btnYahtzee = document.getElementById('btnYahtzee');
const btnChance = document.getElementById('btnChance');

//score trackers
let oneScore = 0;
let twoScore = 0;
let threeScore = 0;
let fourScore = 0;
let fiveScore = 0;
let sixScore = 0;
let bonusScore = 0;
let totalScore = 0;

let threeKindScore = 0;
let fourKindScore = 0;
let fullHouseScore = 0;
let smStraightScore = 0;
let lgStraightScore = 0;
let yahtzeeScore = 0;
let chanceScore = 0;

//submit buttons
let oneSubmit = false;
let twoSubmit = false;
let threeSubmit = false;
let fourSubmit = false;
let fiveSubmit = false;
let sixSubmit = false;

let threeKindSubmit = false;
let fourKindSubmit = false;
let fullHouseSubmit = false;
let smStraightSubmit = false;
let lgStraightSubmit = false;
let yahtzeeSubmit = false;
let chanceSubmit = false;

//score texts
const totalScoreText = document.querySelector('.total-score-text2');
const onesText = document.getElementById('ones-score');
const twosText = document.getElementById('twos-score');
const threesText = document.getElementById('threes-score');
const foursText = document.getElementById('fours-score');
const fivesText = document.getElementById('fives-score');
const sixesText = document.getElementById('sixes-score');
const bonusScoreText = document.getElementById('bonus-score');

const threeKindText = document.getElementById('three-kind-score');
const fourKindText = document.getElementById('four-kind-score');
const fullHouseText = document.getElementById('full-house-score');
const smStraightText = document.getElementById('small-straight-score');
const lgStraightText = document.getElementById('large-straight-score');
const yahtzeeText = document.getElementById('yahtzee-score');
const chanceText = document.getElementById('chance-score');

//counters
let firstRowSubmitted = 0;
let totalSubmitted = 0;

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
  bonusScore = 0;
  threeKindScore = 0;
  fourKindScore = 0;
  fullHouseScore = 0;
  smStraightScore = 0;
  lgStraightScore = 0;
  yahtzeeScore = 0;
  chanceScore = 0;
  totalScore = 0;
  firstRowSubmitted = 0;
  totalSubmitted = 0;
  hold1 = false;
  hold2 = false;
  hold3 = false;
  hold4 = false;
  hold5 = false;
  diceEl1.src = `dice-1.png`;
  diceEl2.src = `dice-2.png`;
  diceEl3.src = `dice-3.png`;
  diceEl4.src = `dice-4.png`;
  diceEl5.src = `dice-5.png`;
  btnHold1.textContent = 'hold';
  btnHold2.textContent = 'hold';
  btnHold3.textContent = 'hold';
  btnHold4.textContent = 'hold';
  btnHold5.textContent = 'hold';
  newRoll();
  startMessage.classList.remove('hidden');
  btnNewGame.classList.add('hidden');
  won.classList.add('hidden');
  diceEl1.classList.remove('hidden');
  diceEl2.classList.remove('hidden');
  diceEl3.classList.remove('hidden');
  diceEl4.classList.remove('hidden');
  diceEl5.classList.remove('hidden');
  btnHold1.classList.remove('hidden');
  btnHold2.classList.remove('hidden');
  btnHold3.classList.remove('hidden');
  btnHold4.classList.remove('hidden');
  btnHold5.classList.remove('hidden');
  btnRoll.classList.remove('hidden');

  //reset scores
  totalScoreText.textContent = 0;
  onesText.textContent = 'Score: -';
  twosText.textContent = 'Score: -';
  threesText.textContent = 'Score: -';
  foursText.textContent = 'Score: -';
  fivesText.textContent = 'Score: -';
  sixesText.textContent = 'Score: -';
  bonusScoreText.textContent = 'Score: -';
  threeKindText.textContent = 'Score: -';
  fourKindText.textContent = 'Score: -';
  fullHouseText.textContent = 'Score: -';
  smStraightText.textContent = 'Score: -';
  lgStraightText.textContent = 'Score: -';
  yahtzeeText.textContent = 'Score: -';
  chanceText.textContent = 'Score: -';

  // reset holds
  oneSubmit = false;
  twoSubmit = false;
  threeSubmit = false;
  fourSubmit = false;
  fiveSubmit = false;
  sixSubmit = false;
  threeKindSubmit = false;
  fourKindSubmit = false;
  fullHouseSubmit = false;
  smStraightSubmit = false;
  lgStraightSubmit = false;
  yahtzeeSubmit = false;
  chanceSubmit = false;
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

let win = function () {
  if (totalSubmitted === 13) {
    won.classList.remove('hidden');
    diceEl1.classList.add('hidden');
    diceEl2.classList.add('hidden');
    diceEl3.classList.add('hidden');
    diceEl4.classList.add('hidden');
    diceEl5.classList.add('hidden');
    btnHold1.classList.add('hidden');
    btnHold2.classList.add('hidden');
    btnHold3.classList.add('hidden');
    btnHold4.classList.add('hidden');
    btnHold5.classList.add('hidden');
    btnRoll.classList.add('hidden');
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

const submit = function () {
  totalScoreText.textContent = totalScore;
  rollCount = 3;
  totalSubmitted++;
  unhold();
  newRoll();
  bonus();
  win();
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
    firstRowSubmitted++;
    submit();
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
    firstRowSubmitted++;
    submit();
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
    firstRowSubmitted++;
    submit();
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
    firstRowSubmitted++;
    submit();
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
    firstRowSubmitted++;
    submit();
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
    firstRowSubmitted++;
    submit();
  }
});

//check for bonus
const bonus = function () {
  console.log(firstRowSubmitted);
  let firstRowScore =
    oneScore + twoScore + threeScore + fourScore + fiveScore + sixScore;
  if (firstRowSubmitted === 6) {
    if (firstRowScore > 63) {
      bonusScore = 35;
      totalScore += bonusScore;
      totalScoreText.textContent = totalScore;
      bonusScoreText.textContent = `score: 35`;
    } else {
      bonusScore = 0;
      bonusScoreText.textContent = `score: 0`;
    }
  }
  console.log(bonusScore);
};

// 3 of a kind
btnThreeKind.addEventListener('click', function () {
  if (!threeKindSubmit && hasRolled) {
    threeKindSubmit = true;
    const threeKindArray = makeArray();
    if (
      threeKindArray[0] === threeKindArray[1] &&
      threeKindArray[1] === threeKindArray[2]
    ) {
      threeKindScore = threeKindArray[0] * 3;
    } else if (
      threeKindArray[1] === threeKindArray[2] &&
      threeKindArray[2] === threeKindArray[3]
    ) {
      threeKindScore = threeKindArray[1] * 3;
    } else if (
      threeKindArray[2] === threeKindArray[3] &&
      threeKindArray[3] === threeKindArray[4]
    ) {
      threeKindScore = threeKindArray[2] * 3;
    }

    totalScore += threeKindScore;
    threeKindText.textContent = `Score: ${threeKindScore}`;
    submit();
  }
});

// 4 of a kind
btnFourKind.addEventListener('click', function () {
  if (!fourKindSubmit && hasRolled) {
    fourKindSubmit = true;
    const fourKindArray = makeArray();
    console.log(fourKindArray);

    if (
      fourKindArray[0] === fourKindArray[1] &&
      fourKindArray[1] === fourKindArray[2] &&
      fourKindArray[2] === fourKindArray[3]
    ) {
      fourKindScore = fourKindArray[0] * 4;
    } else if (
      fourKindArray[1] === fourKindArray[2] &&
      fourKindArray[2] === fourKindArray[3] &&
      fourKindArray[3] === fourKindArray[4]
    ) {
      fourKindScore = fourKindArray[1] * 4;
    }

    totalScore += fourKindScore;
    fourKindText.textContent = fourKindScore;
    submit();
  }
});

// full house
btnFullHouse.addEventListener('click', function () {
  if (!fullHouseSubmit && hasRolled) {
    fullHouseSubmit = true;
    const fullHouseArray = makeArray();
    console.log(fullHouseArray);

    if (
      fullHouseArray[0] === fullHouseArray[1] &&
      fullHouseArray[1] === fullHouseArray[2] &&
      fullHouseArray[3] === fullHouseArray[4] &&
      fullHouseArray[0] !== fullHouseArray[4]
    ) {
      fullHouseScore = 25;
    } else if (
      fullHouseArray[0] === fullHouseArray[1] &&
      fullHouseArray[2] === fullHouseArray[3] &&
      fullHouseArray[3] === fullHouseArray[4] &&
      fullHouseArray[0] !== fullHouseArray[4]
    ) {
      fullHouseScore = 25;
    }

    totalScore += fullHouseScore;
    fullHouseText.textContent = fullHouseScore;
    submit();
  }
});

// small straight
btnSmStraight.addEventListener('click', function () {
  if (!smStraightSubmit && hasRolled) {
    smStraightSubmit = true;
    const smStraightArray = makeArray();
    console.log(smStraightArray);

    //last one
    if (
      smStraightArray[0] === smStraightArray[1] - 1 &&
      smStraightArray[1] === smStraightArray[2] - 1 &&
      smStraightArray[2] === smStraightArray[3] - 1
    ) {
      smStraightScore = 30;
    }
    // first one
    else if (
      smStraightArray[1] === smStraightArray[2] - 1 &&
      smStraightArray[2] === smStraightArray[3] - 1 &&
      smStraightArray[3] === smStraightArray[4] - 1
    ) {
      smStraightScore = 30;
    }
    //2nd one
    else if (
      smStraightArray[0] === smStraightArray[2] - 1 &&
      smStraightArray[2] === smStraightArray[3] - 1 &&
      smStraightArray[3] === smStraightArray[4] - 1
    ) {
      smStraightScore = 30;
    }
    //3rd one
    else if (
      smStraightArray[0] === smStraightArray[1] - 1 &&
      smStraightArray[1] === smStraightArray[3] - 1 &&
      smStraightArray[3] === smStraightArray[4] - 1
    ) {
      smStraightScore = 30;
    }
    //4th one
    else if (
      smStraightArray[0] === smStraightArray[1] - 1 &&
      smStraightArray[1] === smStraightArray[2] - 1 &&
      smStraightArray[2] === smStraightArray[4] - 1
    ) {
      smStraightScore = 30;
    }

    totalScore += smStraightScore;
    smStraightText.textContent = smStraightScore;
    submit();
  }
});

// large straight
btnLgStraight.addEventListener('click', function () {
  if (!lgStraightSubmit && hasRolled) {
    lgStraightSubmit = true;
    const lgStraightArray = makeArray();
    console.log(lgStraightArray);

    if (
      lgStraightArray[0] === lgStraightArray[1] - 1 &&
      lgStraightArray[1] === lgStraightArray[2] - 1 &&
      lgStraightArray[2] === lgStraightArray[3] - 1 &&
      lgStraightArray[3] === lgStraightArray[4] - 1
    ) {
      lgStraightScore = 40;
    }

    totalScore += lgStraightScore;
    lgStraightText.textContent = lgStraightScore;
    submit();
  }
});

//yahtzee
btnYahtzee.addEventListener('click', function () {
  if (!yahtzeeSubmit && hasRolled) {
    yahtzeeSubmit = true;
    const yahtzeeArray = makeArray();
    if (
      yahtzeeArray[0] === yahtzeeArray[1] &&
      yahtzeeArray[1] === yahtzeeArray[2] &&
      yahtzeeArray[2] === yahtzeeArray[3] &&
      yahtzeeArray[3] === yahtzeeArray[4]
    ) {
      yahtzeeScore = 50;
    }

    totalScore += yahtzeeScore;
    yahtzeeText.textContent = yahtzeeScore;
    submit();
  }
});

//yahtzee
btnChance.addEventListener('click', function () {
  if (!chanceSubmit && hasRolled) {
    chanceSubmit = true;
    const chanceArray = makeArray();
    for (let i = 0; i < chanceArray.length; i++) {
      chanceScore += chanceArray[i];
    }

    totalScore += chanceScore;
    chanceText.textContent = chanceScore;
    submit();
  }
});
