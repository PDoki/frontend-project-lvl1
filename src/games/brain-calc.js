import playTheGame from '../index.js';
import getRandomNumber from '../random-number.js';

// the rules of the game
const gameRule = 'Write the result of the expression?';

const mathOperators = ['+', '-', '*'];

const getOperation = (arrOfMathsOperators) => {
  const numberOfMathsOperators = arrOfMathsOperators.length - 1;
  const mathsOperatorIndex = getRandomNumber(0, numberOfMathsOperators);
  return arrOfMathsOperators[mathsOperatorIndex];
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
    default: return null;
  }
  return String(result);
};

const generateTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getOperation(mathOperators);
  const task = `${num1} ${sign} ${num2}`;

  const rightAnswer = calculateExpression(num1, num2, sign);

  return {
    task,
    rightAnswer,
  };
};

const startGame = () => playTheGame(generateTask, gameRule);

export default startGame;
