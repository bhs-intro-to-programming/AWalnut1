// doing this new on 11/15/22 as my arrays is a 1/4

const countTens = (array) => {
  let tens = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      tens++
    }
  }
  return tens
}; // i feel as if this could be simplified but whatever works, works

const sum = (array) => {
  let numbers = 0;
  for (let i = 0; i < array.length; i++) {
    numbers = (numbers + array[i])
  }
  return numbers
};// i put an extra, uneeded let in there like a MORON

const evens = array => {
  let numbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numbers.push(array[i])
    }
  }
  return numbers
}; // misread the problem first time around, got it tho

const anyOverOneHundred = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      return true
    }
  }
  return false
}; // no comment

const pyramid = (integer) => {
  let product = []
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < i + 1; j++) {
      product.push(i + 1)
    }
  }
  return product
}; // im gonna be completely honest i have no fucking idea how this worked or why, if you could give a cool smart guy explanation i would appreciate it.