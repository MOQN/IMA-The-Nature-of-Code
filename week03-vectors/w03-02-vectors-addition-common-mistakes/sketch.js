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
  var vector3 = createVector(0, 0);

  vector3 = vector1.add(vector2); // WRONG!
  printVector(vector3);

  vector1.x = 5;
  printVector(vector3);
}

function draw() {
  noLoop();
}

function printVector(v) {
  print("(" + v.x + ", " + v.y + ")");
}