var v;

function setup() {
  createCanvas(500,600);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(255);
  
  var mouseVec = createVector(mouseX, mouseY);
  var centerVec = createVector(width/2, height/2);
  var vector = p5.Vector.sub(mouseVec, centerVec);
  var angle = vector.heading();
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  stroke(0);
  line(0,0, 200, 0);
  pop();
  
  v.flow(angle);
  v.update();
  v.checkEdges();
  v.display();
}