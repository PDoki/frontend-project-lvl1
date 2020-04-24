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
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(gameRules);

// Check if the number even
const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// the game
const game = () => {
  // stick to the number
  const number = randomNumber();

  // Display the question
  question(number);

  // Ask a user for their answer
  const userAnswer = askUserAnswer();

  // Check user's answer and display result
  const answer = isPrime(number);

  // check if user's answer's correct
  const result = isCorrectUserAnswer(userAnswer, answer);

  feedback(userName, userAnswer, answer);

  return result;
};

// playTheGame(game);
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
