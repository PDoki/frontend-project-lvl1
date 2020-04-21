import {
  userName,
  askUserAnswer,
  isCorrectUserAnswer,
  randomNumber,
  question,
  feedback,
  // playTheGame,
} from './index.js';


console.log(`Hello, ${userName}!`);

// Explain rules to the user
const gameRules = 'Find the greatest common divisor of given numbers.';
console.log(gameRules);

// Calculate the greatest divisor
const getGraeterDivisor = (num1, num2) => {
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
  const answer = String(getGraeterDivisor(num1, num2));

  // check if user's answer's correct
  const result = isCorrectUserAnswer(userAnswer, answer);

  // give a feedback
  feedback(userName, userAnswer, answer);

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