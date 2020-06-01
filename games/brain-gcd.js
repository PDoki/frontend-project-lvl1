import {
  isCorrectUserAnswer,
  randomNumber,
  playTheGame,
} from '../src/index.js';

// the rules of the game
const gameRules = 'Find the greatest common divisor of given numbers.';

const getGreaterDivisor = (num1, num2) => {
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

  const rightAnswer = String(getGreaterDivisor(num1, num2));

  const isAnswerRight = (userAnswer) => isCorrectUserAnswer(userAnswer, rightAnswer);

  return {
    task,
    rightAnswer,
    isAnswerRight,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRules);

export default startGame;
