const needHeavyCoat = (goingOutside, coldOut) => {
  return goingOutside && coldOut
};

const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
};

const needMittens = (goingOutside, warm) => {
  return goingOutside && !warm
};

const isVenomous = (striped, blueHead) => {
  if (!striped && blueHead) {
    return false
  } return true
};