const findFnord = (s) =>{
  return s.indexOf("fnord")
};

const stringContains = (s1, s2) => {
  return
};

const firstAndLast = (s) => {
  return s.substring(0, 1) + s.substring(s.length-1)
};

const swapFrontAndBack = (s) => {
  let cutOff = Math.floor(s.length / 2)
  return s.substring(cutOff, s.length) + s.substring(0, cutOff)
};

const simplePigLatin = (s) => {
  let vowels = /[aeiou]/
  let first = s.indexOf(vowels)
  return first
}

const isAllUpperCase = (s) => {
  return s === s.toUpperCase()
};