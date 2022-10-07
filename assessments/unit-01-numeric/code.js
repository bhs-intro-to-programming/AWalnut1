// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (numberOfPeople, numberOfItems) => {
  while (numberOfPeople > numberOfItems) {
    numberOfPeople - numberOfItems
    console.log(numberOfItems)
  }
  return
};

const areaOfCircle = (radius) => {
  return Math.PI * radius ** 2
}; // didnt see the proper syntax in the question for a second there

const volumeOfCube = (edge) => {
  return
};

const populationGrowth = (population, growth) => {
  return population * (1 + growth)
};

const earnedRunAverage = (earnedRuns, innings) => {
  return ((earnedRuns + innings) / 2) * 9
};

const valueOfJewels = (numDiamonds, numEmeralds, valueDiamonds, valueEmeralds) => {
  return (numDiamonds * valueDiamonds) + (numEmeralds, valueEmeralds)
};

const payWithOvertime = (numHours, hourlyRate, overtimeRate) => {
  if (numHours <= 8) {
    return numHours * hourlyRate
  } else  {
    return (hourlyRate * 8) + ((numHours-8) * overtimeRate)
  }
}; 

const firstClassPostage = (letterOz) => {
  return 60 + ((Math.ceil(letterOz-1))*24)
};

const weightOnJupiter = (weightOnEarth) => {
  return (weightOnEarth / EARTH_GRAVITY) * JUIPITER_GRAVITY
};