import playTheGame from '../index.js';
import getRandomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'What number is missing in the progression?';

const createProgression = (firstNum, diff) => {
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    const num = firstNum + diff * i;
    progression.push(num);
  }

  return progression;
};

const generateTask = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const progressionToDisplay = createProgression(start, step);

  const dotsInsteadOfValue = '..';
  const numToHide = getRandomNumber(0, (progressionToDisplay.length - 1));
  const rightAnswer = progressionToDisplay[numToHide].toString();
  progressionToDisplay[numToHide] = dotsInsteadOfValue;
  const task = progressionToDisplay.join(' ');

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(generateTask, gameRule);

export default startGame;
