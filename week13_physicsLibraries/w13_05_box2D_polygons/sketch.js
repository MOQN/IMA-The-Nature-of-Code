let world;
let boxes = [];
let circles = [];
let polygons = [];
let boundaries = [];
let surface;

function setup() {
  createCanvas(600, 800);
  world = createWorld();

  // create boxes
  for (let i = 0; i < 10; i++) {
    boxes.push(new Box(random(width), 0));
    circles.push(new Circle(random(width), 0));
    polygons.push(new Polygon(random(width), 0));
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

  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].display();
    if (circles[i].isDone()) {
      circles.splice(i, 1);
    }
  }
  
  for (let i = polygons.length - 1; i >= 0; i--) {
    polygons[i].display();
    if (polygons[i].isDone()) {
      polygons.splice(i, 1);
    }
  }
}


function mousePressed() {
  let rnd = random(1);
  if (rnd < 0.333) {
    boxes.push(new Box(mouseX, mouseY));
  } else if (rnd < 0.666) {
    circles.push(new Circle(mouseX, mouseY));
  } else {
    polygons.push(new Polygon(mouseX, mouseY));
  }
}