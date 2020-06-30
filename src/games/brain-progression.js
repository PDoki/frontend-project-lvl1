import playTheGame from '../index.js';
import randomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'What number is missing in the progression?';

const createProgression = (firstNum, diff) => {
  const arr = [];
  const lastIndexOFArr = 9;

  for (let i = 0; i <= lastIndexOFArr; i += 1) {
    const num = firstNum + diff * i;
    arr.push(num);
  }

  return arr;
};

const missingNumber = (num) => String(num);

const taskGenerator = () => {
  const start = randomNumber();
  const step = randomNumber();
  const arrToDisplay = createProgression(start, step);

  const dotsInsteadOfValue = '..';
  const arrToDisplayLength = arrToDisplay.length - 1;
  const valToHide = randomNumber(0, arrToDisplayLength);
  const rightAnswer = missingNumber(arrToDisplay[valToHide]);
  arrToDisplay[valToHide] = dotsInsteadOfValue;
  const task = arrToDisplay.join(' ');

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRule);

export default startGame;
