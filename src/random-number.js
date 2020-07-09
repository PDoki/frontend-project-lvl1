// Generate a random number
const getRandomNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export default getRandomNumber;
