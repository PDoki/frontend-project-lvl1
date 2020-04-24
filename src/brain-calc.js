import {
  askUserAnswer,
  userName,
  isCorrectUserAnswer,
  randomNumber,
  question,
  feedback,
  // playTheGame,
} from './index.js';

// Greet the user
console.log(`Hello, ${userName}!`);

// Explain rules of the game
const gameRules = 'Write the result of the expression?';
console.log(gameRules);

// Array of math operators
const mathOperators = ['+', '-', '*'];

// Get a random operation
const operation = (arr) => {
  const len = arr.length;
  const sign = Math.floor(Math.random() * len);
  return arr[sign];
};

// solve expression
const count = (number1, number2, mathOperation) => {
  let result;
  if (mathOperation === '+') {
    result = number1 + number2;
  }
  if (mathOperation === '-') {
    result = number1 - number2;
  }
  if (mathOperation === '*') {
    result = number1 * number2;
  }
  return String(result);
};

// the game
const game = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const sign = operation(mathOperators);
  const expression = `${num1} ${sign} ${num2}`;

  // Display the question
  question(expression);

  // Ask a user for their answer
  const userAnswer = askUserAnswer();

  // check if userAnswer is correct
  const answer = count(num1, num2, sign);

  // check if user's answer's correct
  const result = isCorrectUserAnswer(userAnswer, answer);

  // give a feedback
  feedback(userName, userAnswer, answer);

  return result;
};

// playTheGame(game),
// *** Make sure the user answered correctly 3 Qs in a raw before the game ends
const playTheGame = () => {
  let counter = 0;
  while (counter < 3) {
    const result = game();
    if (result !== 'correct') {
      counter = 3;
    } else {
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}! You won this game!`);
      }
    }
  }
};

export default playTheGame;
