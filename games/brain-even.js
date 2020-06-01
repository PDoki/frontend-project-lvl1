import {
  isCorrectUserAnswer,
  randomNumber,
  playTheGame,
} from '../src/index.js';

// the rules of the game
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';


// check whether the number is even
const isEven = (num) => num % 2 === 0;

const taskGenerator = () => {
  const task = randomNumber();
  const rightAnswer = isEven(task) ? 'yes' : 'no';
  const isAnswerRight = (userAnswer) => isCorrectUserAnswer(userAnswer, rightAnswer);
  return {
    task,
    rightAnswer,
    isAnswerRight,
  };
};

const startGame = () => playTheGame(taskGenerator, rule);

export default startGame;
