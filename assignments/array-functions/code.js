// doing this new on 11/15/22 as my arrays is a 1/4

const countTens = (array) => {
  let tens = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      tens++
    }
  }
  return tens
}; // i feel as if this could be simplified but whatever works, works

const sum = (array) => {
  let numbers = 0
  for (let i = 0; i < array.length; i++) {
    let numbers = (numbers + array[i])
  }
  return numbers
};