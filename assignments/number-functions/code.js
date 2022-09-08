function add (a,b) {
  return a+b
}

function subtract (a,b) {
   return a-b
}

function multiply (a,b) {
  return a*b
}

function divide (a,b) {
  return a/b
}

function mod (a,b) {
  return a%b
}

function averageOfTwo (a,b) {
  return (a+b)/2
}

function averageOfThree (a,b,c) {
  return (a+b+c)/3
}

function distance (a,b) {
  return Math.abs(a-b)
}

function manhattanDistance (a1, b1, a2, b2) {
  return (Math.abs(a1-a2))+(Math.abs(b1-b2))
}

function euclideanDistance (a1, b1, a2, b2) {
  return Math.sqrt((Math.abs(a1-a2))**2)+((Math.abs(b1-b2))**2)
}
