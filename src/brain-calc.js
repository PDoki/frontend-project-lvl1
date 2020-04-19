import readlineSync from 'readline-sync';
import userName from './index.js';

// Greet the user
console.log(`Hello, ${userName}!`);

// Explain rules of the game
const gameRules = 'Write the result of the expression?';
console.log(gameRules);

// Random number
const displayNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

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

// *** check userAnswer
const isCorrect = (userAnswer, correctAnswer) => (userAnswer === correctAnswer ? 'correct' : 'wrong');

// the game
const game = () => {
  const num1 = displayNumber();
  const num2 = displayNumber();
  const sign = operation(mathOperators);
  const expression = `${num1} ${sign} ${num2}`;

  // *** Display the question
  const question = `Question: ${expression}`;
  console.log(question);

  // *** Ask a user their answer
  const userAnswer = readlineSync.question('Answer: ');

  // check if userAnswer is correct
  const answer = count(expression);

  // *** give user a feedback
  const correct = `Well done, ${userName}!`;
  const wrong = `Your answer "${userAnswer}" is wrong. Correct answer is "${answer}"\nLet's try again, ${userName}!`;

  // *** check if user's answer's correct
  const result = isCorrect(userAnswer, answer);

  // *** display feedback
  if (result === 'correct') {
    console.log(correct);
  } else {
    console.log(wrong);
  }

  return result;
};

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
