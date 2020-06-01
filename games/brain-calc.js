import {
  isCorrectUserAnswer,
  randomNumber,
  playTheGame,
} from '../src/index.js';

// the rules of the game
const gameRules = 'Write the result of the expression?';

const mathOperators = ['+', '-', '*'];

const operation = (arr) => {
  const len = arr.length;
  const sign = Math.floor(Math.random() * len);
  return arr[sign];
};

const count = (number1, number2, mathOperation) => {
  let result;
  switch (mathOperation) {
    case '+': result = number1 + number2;
      break;
    case '-': result = number1 - number2;
      break;
    case '*': result = number1 * number2;
      break;
    default: result = number1 + number2;
  }
  return String(result);
};

const taskGenerator = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const sign = operation(mathOperators);
  const task = `${num1} ${sign} ${num2}`;

  const rightAnswer = count(num1, num2, sign);

  const isAnswerRight = (userAnswer) => isCorrectUserAnswer(userAnswer, rightAnswer);
  return {
    task,
    rightAnswer,
    isAnswerRight,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRules);

export default startGame;
