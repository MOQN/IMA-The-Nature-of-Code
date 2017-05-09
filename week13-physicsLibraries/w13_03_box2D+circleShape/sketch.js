var world;
var boxes = [];
var circles = [];
var boundaries = [];
var img;

function preload() {
  img = loadImage("ball.png");
}


function setup() {
  createCanvas(600, 800);
  world = createWorld();

  // create boxes and circles
  for (var i = 0; i < 10; i++) {
    boxes.push(new Box(random(width), 0));
    circles.push(new Circle(random(width), 0));
  }

  // create boundaries
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

  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].display();
    if (circles[i].isDone()) {
      circles.splice(i, 1);
    }
  }

}


function mousePressed() {
  if (random(1) > 0.5) {
    boxes.push(new Box(mouseX, mouseY));
  } else {
    circles.push(new Circle(mouseX, mouseY));
  }
}