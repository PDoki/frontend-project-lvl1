import {
  isCorrectUserAnswer,
  randomNumber,
  playTheGame,
} from '../src/index.js';

// the rules of the game
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const taskGenerator = () => {
  const task = randomNumber(0, 1000);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';
  const isAnswerRight = (userAnswer) => isCorrectUserAnswer(userAnswer, rightAnswer);
  return {
    task,
    rightAnswer,
    isAnswerRight,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRules);

export default startGame;
