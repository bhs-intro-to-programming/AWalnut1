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

const canBePresident = (thirtyFiveYearsOld, bornCitizen, inUSFor14Years) => {
  return thirtyFiveYearsOld && bornCitizen && inUSFor14Years
};

const willSeeTweet = (follows, retweet, blocked) => {
  return (follows || retweet) && !blocked
};

const evenGreaterThanZero = (n) => {
  return (n % 2) && (n > 0)
}; 

const isLeapYear = (year) => {
  const evenFour = year % 4 === 0
  const evenHundred = year % 100 === 0
  const evenFourHundred = year % 400 === 0
  return evenFour && (!evenHundred || evenFourHundred)
}; 

const firstAndLast = (s) => {
  return s.substring(0) + s.substring(s.length - 1)
};