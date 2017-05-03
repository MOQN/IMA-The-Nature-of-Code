function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255);
  
  for (var x = 0; x < width; x++) {
    var freq = (x + frameCount) * 0.01;
    var amp = 100;
    var noiseValue = noise(freq) * amp;
    
    var y = width / 2 + noiseValue;

    stroke(0);
    strokeWeight(3);
    point(x, y);
  }
}