const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}; 

const charactersAround = (s, index) => {
  return s.substring(index - 1, index) + s.substring(index + 1, index + 2)
};

const middle = (s) => {
  return s.substring(s.length / 4, (s.length - s.length / 4))
};

const pair = (s1, s2) => {
  return s1 + ' and ' + s2
};

const containsX = (s) => {
  if (s.indexOf('x') > 0) {
    return true
  }
  return false
};

const slug = (s1, s2, s3) => {
  return s1.toLowerCase() + '-' + s2.toLowerCase() + '-' + s3.toLowerCase()
};

const capitalize = (s) => {
  return s.substring(0,1).toUpperCase() + s.substring(1,s.length).toLowerCase()
}; // every time i do a function with the fukin .toUpper/LowerCases i have to relearn the stupid way they work
// and EVERY TIME IT MAKES PERFECT SENSE AFTER THE FACT
// i just wish i could do s.toUpperCase(0,1) and be done with it

const capitalizeName = (s) => {
  let s1 = s.substring(0,s.indexOf(' '))
  let s2 = s.substring(s.indexOf(' ')+1, s.length)
  return capitalize(s1) + ' ' + capitalize(s2)
};
