// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 21 2017

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  drawCoordSystem(color(255, 0, 0, 150));

  drawCircle(PI / 4, 200); // drawCircle(angle, radialDistance);

  // random circles. compare between two
  
  for (let i = 0; i < 500; i++) {
    drawCircle(random(PI*2), random(200));
  }
  
  /*
  for (let i = 0; i < 500; i++) {
    let x = random(-200, 200);
    let y = random(-200, 200);
    ellipse(x, y, 10, 10);
  }
  */
  
}

function drawCircle(angle, rDist) {
  let x = cos(angle) * rDist;
  let y = sin(angle) * rDist;

  push();
  noStroke();
  fill(255);
  ellipse(x, y, 10, 10);
  stroke(255, 100);
  noFill();
  line(0, 0, x, y);
  ellipse(0, 0, rDist * 2, rDist * 2);
  pop();
}

function drawCoordSystem(c) {
  push();
  stroke(c);
  noFill();
  rectMode(CENTER);
  rect(0, 0, width, height);
  strokeWeight(3);
  line(-width * 2, 0, width * 2, 0);
  line(0, -height * 2, 0, height * 2);
  noStroke();
  fill(c)
  text("(0,0)", 10, 20);
  pop();
}