var RESOLUTION = 10;

function setup() {
  createCanvas(500, 600);
  noStroke();
}

function draw() {
  background(255);
  
  for (var y = 0; y < height; y += RESOLUTION) {
    for (var x = 0; x < width; x += RESOLUTION) {
      var xFreq = (x + frameCount) * 0.01;
      var yFreq = (y + frameCount) * 0.01;
      var amp = 255; // the range of color
      var noiseValue = noise(xFreq, yFreq) * amp;

      fill(noiseValue);
      rect(x, y, RESOLUTION, RESOLUTION);
    }
  }
}