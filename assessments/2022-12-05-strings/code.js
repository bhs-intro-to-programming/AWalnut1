const upToX = (s) => {
  let x = s.indexOf('x')
  return s.substring(0,x)
}; // i changed nothing and it worked ok

const charactersAround = (s, index) => {
  return s.substring (index-1, index) + s.substring (index+1, index+2)
};

const middle = (s) => {
  let quarter = s.length/4
  return s.substring (quarter, (s.length-quarter))
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

const slug = () => {
  return
};

const capitalize = () => {
  return
};

const capitalizeName = () => {
  return
};
