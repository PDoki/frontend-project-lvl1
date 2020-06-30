import playTheGame from '../index.js';
import randomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'Write the result of the expression?';

const mathOperators = ['+', '-', '*'];

const getOperation = (arr) => {
  const len = arr.length - 1;
  const sign = randomNumber(0, len);
  return arr[sign];
};

const calculateExpression = (number1, number2, mathOperation) => {
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
  const sign = getOperation(mathOperators);
  const task = `${num1} ${sign} ${num2}`;

  const rightAnswer = calculateExpression(num1, num2, sign);

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(taskGenerator, gameRule);

export default startGame;
