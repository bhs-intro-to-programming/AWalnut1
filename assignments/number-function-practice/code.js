const add = (a, b) => {
  return a + b
} // starting small

const averageOfThree = (a, b, c) => {
  return (a + b + c) / 3
}; // getting better

// i just spent the last 15 mins trying to do a cool thing with like let loops and shit and then realised its the exact same as

const multiply = (a, b) => {
  return a * b
} // it would have been cool tho, trust me

const addButThenAddOneMore = (a, b) => {
  return (a + b) + 1
}; // i thought it would be funny, could be shortened to just addOneMore

const nothing = (a,b) => {
  return [a,b]
}; // i read your thing on the PR, sad i cant fufill my true creative vision but this will have to do

const cubed = (a) => {
  return a ** 3
}; // haha get cubed idiot

const remainder = (a, b) => {
  return a % b
}; // just using this so i can find out what the % does
// found out its called the remainder, still no idea what it does
const zero = (a) => {
  return a - a
};// funny

const realSmall = (victim) => {
  return (((((((victim / 2) / 2) / 2) / 2) / 2) / 2) / 2)
}; // also funny

const randomPlus = (a) => {
  return Math.random() + a
}; // forgot about having to do the little () to declare a function, also funny 3

const three = () => {
  return 3
} // not even going to dignify this one with a semicolon

const perimeterOfASquareThatIsTwiceTheSizeOfWhatItWouldBeNormally = (a) => {
  return (a * 4) * 2
}; // not realy sure what im doing anymore, but im havin fun :)
// also comically long function names are comical(ly long)
const fatArrows = (a) => {
  let i = 0
  while (i < a) {
    console.log('=>')
    i++
  }
  return '=>' 
}; // hehe look at all those little guys

const flipACoin = () => {
  let c = Math.random()
  if (c < 0.5) {
    return 'heads'
  } else {
    return 'tails'
  }
}; // very useful function i swear
// cant just do it in a browser no way
// haha line 69