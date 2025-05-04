const randomNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function getNum() {
  const randomIndex = Math.floor(Math.random() * randomNums.length);
  const takenNum = randomNums[randomIndex];
  return takenNum;
}

const numberToGuess = getNum();
console.log(numberToGuess);
