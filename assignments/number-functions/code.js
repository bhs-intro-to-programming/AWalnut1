const add = (a, b) => {
  return a+b
}

const subtract = (a,b) => {
   return a-b
}

const multiply = (a,b) => {
  return a*b
}

const divide = (a,b) => {
  return a/b
}

const mod = (a,b) => {
  return a%b
}

const averageOfTwo = (a,b) => {
  return (a+b)/2
}

const averageOfThree = (a,b,c) => {
  return (a+b+c)/3
}

const distance = (a,b) => {
  return Math.abs(a-b)
}

const manhattanDistance = (a1, b1, a2, b2) => {
  return (Math.abs(a1-a2))+(Math.abs(b1-b2))
}

const euclideanDistance (a1, b1, a2, b2) => {
  return Math.sqrt((Math.abs(a1-a2))**2+(Math.abs(b1-b2))**2)
}


// cool