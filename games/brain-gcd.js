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
const gameRules = 'Find the greatest common divisor of given numbers.';
console.log(gameRules);

// Calculate the greatest divisor
const getGreaterDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

// the game
const game = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const task = `${num1}, ${num2}`;
  // Display the question
  question(task);

  // Ask a user for their answer
  const userAnswer = askUserAnswer();

  // check if userAnswer is correct
  const answer = String(getGreaterDivisor(num1, num2));

  // check if user's answer's correct
  const result = isCorrectUserAnswer(userAnswer, answer);

  // give a feedback
  feedback(userName, userAnswer, answer);

  return result;
};

export default game;
