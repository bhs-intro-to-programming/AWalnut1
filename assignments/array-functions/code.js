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
  return xs[0] + xs[1] + xs[2] + xs[3] + xs[4] + xs[5] + xs[6]
};