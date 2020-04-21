// import readlineSync from 'readline-sync';
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
const count = (str) => {
  // eslint-disable-next-line no-eval
  const answer = eval(str);
  const result = String(answer);
  return result;
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
  const answer = count(expression);

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
