var GRAVITY_MAG = 20;
var GROUND = 450; //420
var p;

function setup() {
  createCanvas(1200, 700);
  background(0);
  frameRate(3);

  // draw the ground
  fill(50);
  rect(0, GROUND, width, height - GROUND);

  // create a particle and change its velocity
  p = new Particle(0, 30);
  p.vel = createVector(20, 0.0);
}

function draw() {
  p.checkBoundaries();
  
  p.displayDebugMode();
  
  var gravity = createVector(0, GRAVITY_MAG);
  p.applyForce(gravity);
  p.update();
  p.display();

  if (p.pos.x > width) {
    noLoop();
  }
}