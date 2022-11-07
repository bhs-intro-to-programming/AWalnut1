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

const distance = (obj1, obj2) => {
  return (Math.sqrt((Math.abs(obj1.x - obj2.x))+(Math.abs(obj1.y - obj2.y))))
};