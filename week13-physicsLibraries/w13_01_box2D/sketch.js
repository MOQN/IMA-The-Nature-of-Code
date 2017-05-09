var world;
var boxes = [];


function setup() {
  createCanvas(600,800);
  world = createWorld();
  
  for (var i=0; i<1; i++) {
    boxes.push( new Box(random(width), 0) );
  }
}


function draw() {
  background(0);
  
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  // http://www.iforce2d.net/b2dtut/worlds
  world.Step( timeStep, 10, 10 );
  
  for (var i = boxes.length-1; i >= 0; i--) {
    boxes[i].display();
    if (boxes[i].isDone()) {
      boxes.splice(i,1);
    }
  }
  
  fill(255);
  text(boxes.length, 10, 20);
}


function mousePressed() {
  boxes.push( new Box( mouseX, mouseY) );
}
