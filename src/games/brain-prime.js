import playTheGame from '../index.js';
import getRandomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Check whether the number is prime -- make it return true/false
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateTask = () => {
  const task = getRandomNumber(0, 1000);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';
  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(generateTask, gameRule);

export default startGame;
