import playTheGame from '../index.js';
import getRandomNumber from '../random-number.js';

// the rule of the game
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';


// check whether the number is even
const isEven = (num) => num % 2 === 0;

const generateTask = () => {
  const task = getRandomNumber();
  const rightAnswer = isEven(task) ? 'yes' : 'no';

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(generateTask, gameRule);

export default startGame;
