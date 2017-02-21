// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 20 2017

/** 
 * This example contains errors as it was created to explain common mistakes.
 * Let's analyze what kind of errors there are and why they are incorrect.
 * */


function setup() {
  createCanvas(500, 500);

  var vector1 = createVector(3, 1);
  var vector2 = createVector(5, 2);

  vector1.mult(vector2); // WRONG!
  printVector(vector1);
}

function draw() {
  noLoop();
}

function printVector(v) {
  print("(" + v.x + ", " + v.y + ")");
}