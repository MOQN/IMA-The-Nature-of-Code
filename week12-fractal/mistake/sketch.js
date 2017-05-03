var BRANCH_ANGLE;
var joints = [];
var branches = [];


function setup() {
  createCanvas(800, 600);
  background(255);

  BRANCH_ANGLE = PI / 6;
  for (var i = 0; i < 3; i++) {
    joints.push(createVector(100, height));
    branch(joints[joints.length - 1], 0, 150);
  }
}

function draw() {
  //background(0);
  //for (var i=0; i<branches.length; i++) {
  //branches[i].display();
  //}
  noLoop();
}


function branch(from, angle, len) {
  var vector = p5.Vector.fromAngle(angle - PI / 2).setMag(len);
  var to = p5.Vector.add(from, vector);
  joints.push(to);
  var thickness = map(len, 0, 200, 1, 30);

  // display
  strokeWeight(thickness);
  stroke(0);
  line(from.x, from.y, to.x, to.y);

  // add a branch object
  branches.push(new Branch(from, to, thickness));

  // create new branches
  len = len * 2 / 3 * random(0.7, 1.3); //***

  if (len > 10) {
    var angle1 = BRANCH_ANGLE + angle + random(-0.5, 0.5);
    branch(joints[joints.length - 1], angle1, len);

    var angle2 = -BRANCH_ANGLE + angle + random(-0.5, 0.5);
    branch(joints[joints.length - 1], angle2, len);
  }
}