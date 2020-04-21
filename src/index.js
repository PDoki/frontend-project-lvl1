import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name, please? ');

// Display the question
export const question = (task) => {
  const quest = `Question: ${task}`;
  console.log(quest);
};

// Ask a user for their answer
export const askUserAnswer = () => {
  const answer = readlineSync.question('Answer: ');
  return answer;
};

// check userAnswer
export const isCorrectUserAnswer = (userAnswer, correctAnswer) => (userAnswer === correctAnswer ? 'correct' : 'wrong');

// get random number
export const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

export const feedback = (nameOfUser, userAnswer, correctAnswer) => {
  // give user a feedback
  const correct = `Well done, ${nameOfUser}!`;
  const wrong = `Your answer "${userAnswer}" is wrong. Correct answer is "${correctAnswer}".\nLet's try again, ${nameOfUser}!`;
  const result = isCorrectUserAnswer(userAnswer, correctAnswer);

  // display feedback
  if (result === 'correct') {
    console.log(correct);
  } else {
    console.log(wrong);
  }
};

// *** Make sure the user answered correctly 3 Qs in a raw before the game ends
// export const playTheGame = (func) => {
//   let counter = 0;
//   while (counter < 3) {
//     // TO FIX: when counter = 3 it ends up with a TypeError: func() is not a function
//     const result = func();
//     console.log('result = ', result);
//     if (result !== 'correct') {
//       counter = 3;
//     } else {
//       counter += 1;
//       if (counter === 3) {
//         console.log(`Congratulations, ${userName}! You won this game!`);
//       }
//     }
//   }
// };
