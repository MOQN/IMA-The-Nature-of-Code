let world;
let boxes = [];
let boundaries = [];
let surface;

function setup() {
  createCanvas(600, 600);
  world = createWorld();

  // create boxes
  for (let i = 0; i < 10; i++) {
    boxes.push(new Box(random(width), 0));
  }

  // create boundaries
  boundaries.push(new Boundary(width / 4 + 100, height * 3 / 5, width / 2 + 100, 10));
  boundaries.push(new Boundary(width * 3 / 4, height * 2 / 5, width / 2 - 100, 10));
  
  // Create the surface
  surface = new Surface();
}


function draw() {
  background(0);

  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  // http://www.iforce2d.net/b2dtut/worlds
  world.Step(timeStep, 10, 10);

  // Draw the surface
  surface.display();
  
  // Display all the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  for (let i = boxes.length - 1; i >= 0; i--) {
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