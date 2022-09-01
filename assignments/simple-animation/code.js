// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 7) % width * 2, height / 2, 10, 'blue');
  drawFallingTriangle(width / 1, time);
};

// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.
const drawTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};

const drawSquare = (x1, y1, x2, y2, x3, y3, x4, y4, color, width = 1) => {
  drawLine (x1, y1, x2, y2, color, width);
  drawLine (x2, y2, x3, y3, color, width);
  drawLine (x3, y3, x4, y4, color, width);
  drawLine (x4, y4, x1, y1, color, width);  
};

// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.
const drawFallingTriangle = (x, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = (time / 6) % height;
  let x2 = x1 + 20;
  let x3 = x1 + 80;

  // Figure out the y values as a function of time.
  let y1 = 100;
  let y2 = y1 + 100;
  let y3 = y1 + 100;

  // Actually draw the triangle.
  drawTriangle(x1, y1, x2, y2, x3, y3, 'blue', 10);
};

const drawFallingSquare = (_x, time) => {
  let x1 = 40
  let x2 = x1 + 20
  let x3 = x1 - 40
  let x4 = x1 - 90

  let y1 = 20
  let y2 = y1 - 20
  let y3 = y1 + 40
  let y4 = y1 + 100

  drawSquare(x1, y1, x2, y2, x3, y3, x4, y4, 'red', 10);
}


// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);
