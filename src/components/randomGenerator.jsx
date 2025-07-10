// Generates an array of size 10 with random numbers for cards
export default function randomNumberArr(min, max) {
  const ranArr = new Set();

  while (ranArr.size < 12) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    ranArr.add(num);
  }

  return Array.from(ranArr);
}
