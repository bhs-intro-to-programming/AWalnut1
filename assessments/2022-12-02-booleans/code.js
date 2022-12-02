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
  return (striped || !striped) && !(striped && blueHead)
};// probly a simpler way to do this one but im tired

const okaySpeed = (speedLimit, currentSpeed) => {
  return (speedLimit + 10) > currentSpeed
};

const twiceAsExpensive = (price1, price2) => {
  return price1 > (price2 * 2)
};

const winningRecord = (wins, losses, ties) => {
  return wins > (losses + ties)
};

const isMagicNumber = (number) => {
  if (number === 42) {
    return true 
  } else if (number === 17) {
    return true
  } return false
};
// im gonna be completely honest, i have no idea why 17 is a magic number
// i can take a guess that 42 is a reference to the hitchhikers guide to the galaxy
// but i am completely stumped on 17
// could also be a reference
// most likely is