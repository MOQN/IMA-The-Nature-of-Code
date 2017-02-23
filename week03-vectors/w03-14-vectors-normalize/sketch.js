// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 20 2017


var vector1, vector2;

function setup() {
  createCanvas(500, 500);
  fill(255);
  stroke(255);
}

function draw() {
  background(0);
  vector1 = createVector(width / 2, height / 2);
  vector2 = createVector(mouseX, mouseY);

  ellipse(vector1.x, vector1.y, 3, 3);
  ellipse(vector2.x, vector2.y, 3, 3);

  var vector3 = p5.Vector.sub(vector2, vector1);

  vector3.normalize(); // normalize() function
  vector3.mult(50); // uncomment this!

  var magitude = vector3.mag();

  // let's visualize vector3!
  push();
  translate(vector1.x, vector1.y);
  line(0, 0, vector3.x, vector3.y);
  text("1 x " + round(magitude), vector3.x + 10, vector3.y);
  pop();
}