const emit = (a, b) => console.log(a + ', ' + b);

const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return 'yes'
  } return 'no'
};

const countXs = (s) => {
  let xs = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      xs++
    }
  }
  return xs
};

const timesTable = (n) => {
  return
}; // complicated :(

const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    console.log(i)
    if (s[i] === 'x') {
      return true
    }
    return false
  }
};// THIS SHOULD BE LOOPING WHY ISNT IT AAAAAAAA
// im going fucking insane why isnt this wokring
// its gonna be some really mundane shit like a slight typo that i missed or something and im gonna be fucking LIVID

const sumSquares = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = sum + i ** 2
    console.log(sum)
  }
  return sum
}; // doing this first only adds to my confusion WHY ISNT containsX NOT LOOPING AAAAAAAA