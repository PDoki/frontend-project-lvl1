import readlineSync from 'readline-sync';

const userName = () => {
  const user = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${user}!`);
};

export default userName;
