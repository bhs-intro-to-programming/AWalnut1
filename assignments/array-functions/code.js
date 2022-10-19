const countTens = (xs) => {
  let tens = 0
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === 10) {
      tens++
    }
  }
  return tens;
} 