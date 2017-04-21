var RESOLUTION = 50;
var rows, cols;
var angles = [];

function setup() {
  createCanvas(500, 600);
  rows = floor(width / RESOLUTION);
  cols = floor(height / RESOLUTION);
}

function draw() {
  background(255);

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      var index = r + c * rows; // ***

      var x = r * RESOLUTION;
      var y = c * RESOLUTION;
      
      var xFreq = (x + frameCount) * 0.001;
      var yFreq = (y + frameCount) * 0.001;
      var noiseValue = noise(xFreq, yFreq);
      var angle = map(noiseValue, 0, 1, 0, TWO_PI);
      
      push();
      // draw the rectangles
      translate(x, y);
      stroke(0, 50);
      rect(0, 0, RESOLUTION, RESOLUTION);
      fill(0, 50);
      noStroke();
      text(index, 5, 15);

      // draw the lines
      translate(RESOLUTION / 2, RESOLUTION / 2);
      rotate(angle);
      stroke(0);
      line(0, 0, RESOLUTION / 2, 0);
      pop();

      angles[index] = angle;
    }
  }
}