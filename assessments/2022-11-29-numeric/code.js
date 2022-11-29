const totalEggs = (hardEggsWanted, softEggsWanted) => { return hardEggsWanted + softEggsWanted };

const chocolatesPerPerson = (chocolates, numPeople) => { return Math.floor(chocolates / numPeople) };

const extraChocolates = (chocolates, numPeople) => { return chocolates % numPeople };

const leftOut = (chocolates, numPeople) => {
  if (numPeople - chocolates > 0) {
    return numPeople - chocolates
  }
  return 0
}; //probably an easier way to do this

const probabilityAllHeads = (coinFlips) => { return 0.5 ** coinFlips };

const futureHour = (currentHour, futureHours) => { return currentHour + (futureHours % 24) };

const presentsBudget = (numFriends, avgPresentPrice) => { return numFriends * avgPresentPrice };

const perPresent = (totalMoney, presentsNeeded) => { return totalMoney / presentsNeeded };
// i remembered this one because i was suprised that "per" was a division term in the lecture the other day

const wrappingCombos = (kindsOfPaper, kindsOfRibbons, kindsOfBows) => { return kindsOfPaper * kindsOfRibbons * kindsOfBows };

const biggestNumber = (number) => { return 10 ** number - 1 };
// thanks for the hint, would have torn my hair out about this one without it