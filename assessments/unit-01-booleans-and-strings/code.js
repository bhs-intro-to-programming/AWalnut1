/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (isPulled, isFire, fireDrill) => {
  return isPulled || isFire || fireDrill
};

const canBePresident = (age, bornCitizen, citizenshipTime) => {
  return (age >= 35) && bornCitizen && (citizenshipTime >= 14)
};

const willSeeTweet = (follows, retweet, blocked) => {
  return (follows || retweet) && !blocked
};

const evenGreaterThanZero = (n) => {
  return (n % 2 === 0) && (n > 0)
}; 

const isLeapYear = (year) => {
  const evenFour = year % 4 === 0
  const evenHundred = year % 100 === 0
  const evenFourHundred = year % 400 === 0
  return evenFour && (!evenHundred || evenFourHundred)
}; 

const firstAndLast = (s) => {
  return s.substring(0,1) + s.substring(s.length - 1)
};

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2, s.length) + s.substring(0, (s.length/2))
};

const simplePigLatin = (s, firstVowel) => {
  return s.substring(firstVowel-1,s.length) + s.substring(0,firstVowel-1) + 'ay'
};

const randomCharacter = (s) => {
  return s.substring(rand(s.length))
};