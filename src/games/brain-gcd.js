import playTheGame from '../index.js';
import randomNumber from '../random-number.js';

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

const taskGenerator = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const task = `${num1}, ${num2}`;

  const rightAnswer = String(getGreatestCommonDivisor(num1, num2));

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRule);

export default startGame;
