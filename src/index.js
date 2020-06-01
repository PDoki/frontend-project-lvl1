import readlineSync from 'readline-sync';

// Explain what are the rules of the game
export const gameRules = (str) => {
  console.log(str);
};

// Display the task
export const question = (task) => {
  const quest = `Question: ${task}`;
  console.log(quest);
};

// Ask for user's answer
export const askUserAnswer = () => {
  const answer = readlineSync.question('Answer: ');
  return answer;
};

// Check if user's answer is correct
export const isCorrectUserAnswer = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

// Generate a random number
export const randomNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

// Give user a feedback
export const feedback = (nameOfUser, userAnswer, correctAnswer, result) => {
  const correct = `Well done, ${nameOfUser}!`;
  const wrong = `Your answer "${userAnswer}" is wrong. Correct answer is "${correctAnswer}".\nLet's try again, ${nameOfUser}!`;

  if (result) {
    console.log(correct);
  } else {
    console.log(wrong);
  }
};

// game progress
const game = (generateTask, userName) => {
  const { task, rightAnswer, isAnswerRight } = generateTask();

  question(task);

  const userAnswer = askUserAnswer();

  const result = isAnswerRight(userAnswer);

  feedback(userName, userAnswer, rightAnswer, result);

  return result;
};

export const playTheGame = (taskGenerator, rule) => {
  // Greet a user
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name, please? ');
  console.log(`Hello ${userName}`);
  // Distlay the rule
  gameRules(rule);

  // Make sure the game has 3 rounds and is over if user's wrong
  const numberOfRounds = 3;
  let counter = 0;
  while (counter < numberOfRounds) {
    const result = game(taskGenerator, userName);
    if (!result) {
      break;
    } else {
      counter += 1;
      if (counter === numberOfRounds) {
        console.log(`Congratulations, ${userName}! You won this game!`);
      }
    }
  }
};
