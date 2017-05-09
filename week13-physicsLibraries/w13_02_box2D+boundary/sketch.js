var world;
var boxes = [];
var boundaries = [];


function setup() {
  createCanvas(600, 400);
  world = createWorld();

  // create boxes
  for (var i = 0; i < 10; i++) {
    boxes.push(new Box(random(width), 0));
  }

  // create boundaries
  // new Boundary(x, y, w, h)
  boundaries.push(new Boundary(width / 4 + 100, height * 4 / 5, width / 2 + 100, 10));
  boundaries.push(new Boundary(width * 3 / 4, height * 3 / 5, width / 2 - 100, 10));
}


function draw() {
  background(0);

  var timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  // http://www.iforce2d.net/b2dtut/worlds
  world.Step(timeStep, 10, 10);

  // Display all the boundaries
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].display();
    if (boxes[i].isDone()) {
      boxes.splice(i, 1);
    }
  }



  fill(255);
  text(boxes.length, 10, 20);

  // print(scaleFactor);
}


function mousePressed() {
  boxes.push(new Box(mouseX, mouseY));
}