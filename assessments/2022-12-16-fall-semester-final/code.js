////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...

// just to copy past becuz im lazy
const thing = () => {
  return
}; // also theres 2 less control construct problems than the website thinks there is
// so everything after that is 2 behind what it thinks.

const makeRow = () => {
  return [' ', ' ', ' ']
};

const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
};

const allTheSame = (a) => {
  return a[0] === a[1] && a[1] === a[2]
};

const extractColumn = (board, collumn) => {
  let extraction = []
  for (let i = 0; i < 3; i++) {
    extraction.push(board[i][collumn])
  }
  return extraction
};

const fillTimesTable = (array) => {
  let table = []
  for (let i = 0; i < array.length; i++) {
    table.push((i + 1), (i + 1) * 2, (i + 1) * 3)
  }
  return table
};// im gonna be honest i have no fikin idea what im doing

const sums = (n) => {
  let sum = 0
  let summy = []
  for (let i = 0; i < n+1; i++) {
    summy.push(sum = sum + i)
  }
  return summy
};

const rule110 = (array) => {
  let newArray = []
  for (let i=0; i < array.length; i++) {
    if (array[i-1, i ,i+1] = 0) {
      newArray.push(0)
    }
  }
  return newArray
};// this is only half of the weird ass thing ur asking us to do with this this one 
//and it crashes the website so god only knows what would happen if i finished it

const isSamePoint = (point1, point2) => {
  return (point1.x === point2.x) && (point1.y === point2.y)
};

const area = (rect) => {
  return rect.width * rect.height
};

const totalWithTip = (subtotal, tip) => {
  let totals = {}
  totals.subtotal=subtotal.subtotal
  totals.tip=subtotal.subtotal*tip
  totals.total=(subtotal.subtotal*tip) + subtotal.subtotal
  return totals
};

const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  return employee2
}