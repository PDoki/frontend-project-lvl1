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
const gameRules = 'What number is missing in the progression?';
console.log(gameRules);

// Create an arr of numberes
const createProgression = () => {
  const firstNumber = randomNumber();
  const step = randomNumber(10) + 1;
  const lastIndexOFArr = 9;
  const arrOfProgression = [firstNumber];
  for (let i = 0; i < lastIndexOFArr; i += 1) {
    arrOfProgression[i + 1] = arrOfProgression[i] + step;
  }
  return arrOfProgression;
};

// save the number
const missingNumber = (num) => String(num);

// the game
const game = () => {
  const arrToDisplay = createProgression();
  const dotsInsteadOfValue = '..';
  const valToHide = randomNumber(10);
  const answer = missingNumber(arrToDisplay[valToHide]);
  arrToDisplay[valToHide] = dotsInsteadOfValue;
  const task = arrToDisplay.join(' ');
  // Display the question
  question(task);

  // Ask a user for their answer
  const userAnswer = askUserAnswer();

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
