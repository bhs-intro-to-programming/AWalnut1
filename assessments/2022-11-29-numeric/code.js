const totalEggs = (hardEggsWanted, softEggsWanted) => {
return hardEggsWanted + softEggsWanted
};

const chocolatesPerPerson = (chocolates, numPeople) => {
  return Math.floor(chocolates / numPeople)
};

const extraChocolates = (chocolates, numPeople) => {
  return chocolates % numPeople
};

const leftOut = (chocolates, numPeople) => {
  if (numPeople - chocolates > 0) {
    return numPeople - chocolates 
  }
  return 0
};