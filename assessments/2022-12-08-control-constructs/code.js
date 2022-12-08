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
};

const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    console.log(i)
    if (s[i] === 'x') {
      return true
    }
    return false
  }
};// THIS SHOULD BE LOOPING WHY ISNT ITAAAAAAAA

const sumSquares = (n) => {
  let sum = 0
  for (let i=0; i < n; i++) {
    sum + i**2
  }
  return sum
};