const countTens = (xs) => {
  let tens = 0
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === 10) {
      tens++
    }
  }
  return tens;
}; // thanks for the lecture thing it helped :)

const sum = (xs) => {
  let numbers = 0;
  for (let i = 0; i < xs.length; i++) {
  numbers = numbers + xs[i];
  }
  return numbers
}; // i forgot to put a return function whoopsy daisy

const evens = (xs) => {
  let evenNumbers = []
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] % 2 === 0) {
      evenNumbers.push(xs[i])
    }
  }
  return evenNumbers
};

const anyOverOneHundred = (xs) => {
  for (let i=0; i < xs.length; i++) {
    if (xs[i] > 100)
    return true
  }
};