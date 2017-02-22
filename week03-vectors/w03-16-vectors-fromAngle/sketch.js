// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 22 2017


var vector;


function setup() {
  createCanvas(500, 500);
  background(0);
  fill(255)
}


function draw() {
  background(0);

  var angle = radians(mouseY);
  var distance = mouseX / 2;
  vector = p5.Vector.fromAngle(angle);
  vector.mult(distance);

  stroke(255);
  translate(width / 2, height / 2);
  line(0, 0, vector.x, vector.y);

  noStroke();
  text("Angle: " + round(degrees(angle)), 10, 20);
  text("Distance: " + round(distance), 10, 40);
}