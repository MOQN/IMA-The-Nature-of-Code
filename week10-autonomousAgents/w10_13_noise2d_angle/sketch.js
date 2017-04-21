var RESOLUTION = 30;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255);
  
  stroke(0);
  for (var y = 0; y < height; y += RESOLUTION) {
    for (var x = 0; x < width; x += RESOLUTION) {
      var xFreq = (x + frameCount) * 0.01;
      var yFreq = (y + frameCount) * 0.01;
      var amp = TWO_PI; // the range of angle
      var noiseValue = noise(xFreq, yFreq) * amp;
      push();
      translate(x,y);
      rotate(noiseValue);
      line(0,0,RESOLUTION/2,0);
      pop();
    }
  }
}