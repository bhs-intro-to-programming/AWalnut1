////////////////////////////////////////////////////////////////////////
// Pay no attention to the man behind the curtain. These functions are
// ones you will use, some directly, some indirectly from the functions
// you write. You don't need to understand them or change their code
// though if you really want to you can.

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * Given a number return the next number in a stable but unpredictable sequence.
 */
const nextNumber = (n) => hash(n);

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => Math.floor(Math.random() * 10000);

/*
 * Record an okay object.
 */
const recordOk = (x) => {
  log(`OK: ${x}`);
}

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => {
  log(`NOT OK: ${x}`);
}

/*
 * Record a meh object.
 */
const recordMeh = (x) => {
  log(`MEH: ${x}`);
}

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
 * Log the object via console.log.
 */
const log = (x) => {
  console.log(x);
}

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};


////////////////////////////////////////////////////////////////////////
// Write your code here ...

const logIfOk = (x) => {
  if (isOk(x) === true) {
    log(x)
  }
}; // im gonna be honest this is a lot of information to be dumping on us at once
// I have no idea if this is even correct as the values are "essentially 
// random but stable" so im just gonna assume i did good and move on

const firstOk = (n) => {
  for (let x=0; x > n; x++) {
    if (isOk(x) === true) {
      return x
    }
  }
}; // not touching this one anymore it confuses and frightens me

const timeToLeet = () => {
  let time = 0
  for (let x=0; x++;) {
    if (isLeet(random10k())) {
      return time
    }
    time++
  }
};// i feel as if you are dropping too much info on us all at once
// but then again i never was good at control constructs so maybe im idiot

const classify = () => {
  return
};

const threewayClassify = () => {
  return
};

const sumOfSquares = () => {
  return
};

const pairs = () => {
  return
};
