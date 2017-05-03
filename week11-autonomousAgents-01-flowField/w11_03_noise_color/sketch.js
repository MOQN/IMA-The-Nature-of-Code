function setup() {
  createCanvas(500, 600);
  noStroke();
}

function draw() {
  background(255);
  
  for (var x = 0; x < width; x++) {
    var freq = (x + frameCount) * 0.01;
    var amp = 255; // the range of color
    var noiseValue = noise(freq) * amp;

    fill(noiseValue);
    rect(x,0,1,height);
  }
}