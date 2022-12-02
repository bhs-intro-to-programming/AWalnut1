const findFnord = (s) => {
  return s.indexOf("fnord")
};

const stringContains = (s1, s2) => {
  return
};

const firstAndLast = (s) => {
  return s.substring(0, 1) + s.substring(s.length - 1)
};

const swapFrontAndBack = (s) => {
  let cutOff = Math.floor(s.length / 2)
  return s.substring(cutOff, s.length) + s.substring(0, cutOff)
};

const simplePigLatin = (s, number) => {
  return s.substring(number) + s.substring(0, number) + 'ay'
};

const isAllUpperCase = (s) => {
  return s === s.toUpperCase()
};

const sameIgnoringCase = (s1, s2) => {
  if (s1.toUpperCase() === s2.toUpperCase()) {
    return true
  }
  return false
};

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
};

const secondHalf = (s) => {
  return s.substring(s.length / 2)
};

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
};

const everyOther = (s) => {
  return s.substring(0,1) + s.substring(2,3) + s.substring(4,5)
};

const upDownLastCharacter = (s) => {
  return (s.length-1)
};