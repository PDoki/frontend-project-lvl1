import readlineSync from 'readline-sync';
import userName from './index.js';

console.log(`Hello, ${userName}!`);

// Explain rules to the user
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameRules);

// Check if the number even
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// Check whether the answer is correct
const isCorrectAnswer = (numToCheck, str) => (str === isEven(numToCheck) ? 'correct' : 'wrong');

// Random number
const displayNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

// the game
const game = () => {
  // stick to the number
  const number = displayNumber();

  // Display the question
  const question = `Question: ${number}`;
  console.log(question);

  // Ask a user their answer
  const userAnswer = readlineSync.question('Answer: ');

  // Check user's answer and display result
  const answer = isEven(userAnswer);
  const correct = `Well done, ${userName}!`;
  const wrong = `Your answer "${userAnswer}" is wrong. Correct answer is ${answer}\nLet's try again, ${userName}!`;

  const result = isCorrectAnswer(number, userAnswer);
  if (result === 'correct') {
    console.log(correct);
  } else {
    console.log(wrong);
  }

  return result;
};

// Make sure the user answered correctly 3 Qs in a raw
const startTheGame = () => {
  let counter = 0;
  while (counter < 3) {
    const result = game();
    if (result !== 'correct') {
      counter = 0;
    } else {
      counter += 1;
    }
  }
  console.log(`Congratulations, ${userName}! You won this game!`);
};

export default startTheGame;
