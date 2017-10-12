var p;


function setup() {
  createCanvas(500, 600);
  background(0);
  p = new Particle(width / 2, height / 2);
}


function draw() {
  background(0);

  var gravity = createVector(0,1);
  p.applyForce(gravity);
  
  p.checkBoundaries();
  p.update();
  p.display();

  p.displayVelocity();
}



function keyPressed() {
  var force = createVector();
  switch (keyCode) {
    case UP_ARROW:
      force = createVector(0, -1);
      break;
    case DOWN_ARROW:
      force = createVector(0, 1);
      break;
    case LEFT_ARROW:
      force = createVector(-1, 0);
      break;
    case RIGHT_ARROW:
      force = createVector(1, 0);
      break;
  }
  p.applyForce(force);
}