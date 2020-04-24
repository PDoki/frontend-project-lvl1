import {
  userName,
  askUserAnswer,
  isCorrectUserAnswer,
  randomNumber,
  question,
  feedback,
} from '../src/index.js';

// Greet the user
console.log(`Hello, ${userName}!`);

// Explain rules to the user
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameRules);

// Check if the number even
const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

// the game
const game = () => {
  // stick to the number
  const number = randomNumber();

  // Display the question
  question(number);

  // Ask a user for their answer
  const userAnswer = askUserAnswer();

  // Check user's answer and display result
  const answer = isEven(number);

  // check if user's answer's correct
  const result = isCorrectUserAnswer(userAnswer, answer);

  feedback(userName, userAnswer, answer);

  return result;
};

export default game;
