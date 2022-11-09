const getX = (object) => {
  return object.x
};

const point = (x, y) => {
  let object = { x, y }
  return object
}; // you could also just do return {x,y} but thats boring

const emptyObject = () => {
  let object = {}
  return object
}; //you could probably also just do return {} but also boring

const distance = (p1, p2) => {
  return Math.sqrt((Math.abs(p1.x - p2.x)**2)+(Math.abs(p1.y - p2.y)**2))
}; // i saw your thing but the math.abs's seem to make it work, idk why

const midpoint = (p1,p2) => {
  return { x: ((p1.x + p2.x) /2), y: ((p1.y +p2.y) /2)}
}; // figured out :)

const sumSalaries = (salaries) => {
  let sum=0
  for(let i=0; i < (salaries.length-1); i++) {
    sum = sum + salaries.i
  }
  return salaries.salary
};

const newHighScore = (high, scores) => {
  return
};