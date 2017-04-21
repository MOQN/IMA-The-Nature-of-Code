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

      pop();
    }
  }
}