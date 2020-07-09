import playTheGame from '../index.js';
import getRandomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generateTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const task = `${num1}, ${num2}`;

  const rightAnswer = String(getGreatestCommonDivisor(num1, num2));

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(generateTask, gameRule);

export default startGame;
