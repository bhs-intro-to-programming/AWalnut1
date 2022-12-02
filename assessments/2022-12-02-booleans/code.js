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
    return true
  } return false
};// probly a simpler way to do this one but im tired

const okaySpeed = (speedLimit, currentSpeed) => {
  if (speedLimit + 10 < currentSpeed) {
    return false
  } return true
};

const twiceAsExpensive = (price1, price2) => {
  return price1 > (price2 * 2)
};

const winningRecord = (wins, losses, ties) => {
  return wins > (losses + ties)
};

const isMagicNumber = () => {
  return
};