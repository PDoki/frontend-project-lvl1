import readlineSync from 'readline-sync';


// Give user a feedback
const giveUserFeedback = (nameOfUser, userAnswer, correctAnswer, result) => {
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
  const { task, rightAnswer } = generateTask();
  const question = `Question: ${task}`;
  console.log(question);

  const userAnswer = readlineSync.question('Answer: ');
  const result = (userAnswer === rightAnswer);

  giveUserFeedback(userName, userAnswer, rightAnswer, result);

  return result;
};

const playTheGame = (taskGenerator, rule) => {
  // Greet a user
  const greeting = 'Welcome to the Brain Games!'
  console.log(greeting);
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello ${userName}`);

  // Display the rule of the game
  console.log(rule);

  // Make sure the game has 3 rounds and is over if user's wrong
  const numberOfRounds = 3;
  let counter = 0;
  while (counter < numberOfRounds) {
    const result = game(taskGenerator, userName);
    counter += 1;
    if (!result) {
      return null;
    }
  }
  console.log(`Congratulations, ${userName}! You won this game!`);
  return null;
};

export default playTheGame;
