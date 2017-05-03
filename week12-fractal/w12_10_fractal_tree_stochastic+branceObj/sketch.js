var BRANCH_ANGLE;
var joints = [];
var branches = [];


function setup() {
  createCanvas(800, 600);
  background(255);

  BRANCH_ANGLE = PI / 6;

  var start = createVector(width / 2, height)
  joints.push(start);
  branch(start, 0, 150);

}

function draw() {
  background(0);

  for (var i = 0; i < branches.length; i++) {
    branches[i].display();
  }
  for (var i = 0; i < joints.length; i++) {
    fill(255, 0, 0);
    noStroke();
    text(i, joints[i].x, joints[i].y);
  }
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
    branch(to, angle1, len);

    var angle2 = -BRANCH_ANGLE + angle + random(-0.5, 0.5);
    branch(to, angle2, len);
  }
}