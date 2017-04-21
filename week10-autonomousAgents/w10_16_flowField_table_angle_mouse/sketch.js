var RESOLUTION = 50;
var rows, cols;

function setup() {
  createCanvas(500, 600);
  rows = floor(width / RESOLUTION);
  cols = floor(height / RESOLUTION);
}

function draw() {
  background(255);

  for (var y = 0; y < cols; y++) {
    for (var x = 0; x < rows; x++) {
      var index = x + y * rows; // ***

      push();
      
      // draw the rectangles
      translate(x * RESOLUTION, y * RESOLUTION);
      stroke(0,50);
      rect(0, 0, RESOLUTION, RESOLUTION);
      fill(0,50);
      noStroke();
      text(index, 5, 15);

      // draw the lines
      var xFreq = x * 0.1;
      var yFreq = y * 0.1;
      var noiseValue = noise(xFreq, yFreq);
      //var angle = map(noiseValue, 0, 1, 0, TWO_PI);
      
      var mouse = createVector(mouseX, mouseY);
      var pos = createVector(x * RESOLUTION, y * RESOLUTION);
      var vector = p5.Vector.sub(mouse, pos);
      var angle = vector.heading();

      rotate(angle);
      stroke(0);
      line(0,0,RESOLUTION/2,0);
      
      pop();
    }
  }
}