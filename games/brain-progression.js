import {
  isCorrectUserAnswer,
  randomNumber,
  playTheGame,
} from '../src/index.js';

// the rules of the game
const gameRules = 'What number is missing in the progression?';


const createProgression = () => {
  const arr = [];
  const lastIndexOFArr = 9;
  const start = randomNumber();
  const step = randomNumber();

  for (let i = 0; i <= lastIndexOFArr; i += 1) {
    const num = start + step * i;
    arr.push(num);
  }

  return arr;
};

const missingNumber = (num) => String(num);

const taskGenerator = () => {
  const arrToDisplay = createProgression();

  const dotsInsteadOfValue = '..';
  const valToHide = randomNumber(0, 9);
  const rightAnswer = missingNumber(arrToDisplay[valToHide]);
  arrToDisplay[valToHide] = dotsInsteadOfValue;
  const task = arrToDisplay.join(' ');

  const isAnswerRight = (userAnswer) => isCorrectUserAnswer(userAnswer, rightAnswer);
  return {
    task,
    rightAnswer,
    isAnswerRight,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRules);

export default startGame;
