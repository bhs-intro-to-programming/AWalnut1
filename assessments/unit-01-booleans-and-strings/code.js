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
  return
}; // i have no idea, moving on

const isLeapYear = (year) => {
  let(year % 400) = leapBIG
  if (leapBIG = 0) {
    return true
  } else {
    let(leapBIG % 100) = leapMid
    if (leapMid = 0) {
      return false
    } else {
      let(leapMid % 4) = leapSmall
      if (leapSmall = 0) {
        return true
      } else {
        return false
      }
    }
  }
}; // god this is so fucking shitty and messy but every time i tried to use else if it yelled errors at me until i had to stop

const firstAndLast = (s) => {
  return s.substring(0) + s.substring(s.length - 1)
};