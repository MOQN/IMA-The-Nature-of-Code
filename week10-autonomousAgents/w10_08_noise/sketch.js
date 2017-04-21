function setup() {
  createCanvas(500, 600);
  background(255);
}

function draw() {
  var freq = frameCount*0.01;
  var amp = 100;
  var noiseValue = noise(freq) * amp;
  
  var x = frameCount % width;
  var y = width/2 + noiseValue;
  
  stroke(0);
  strokeWeight(3);
  point(x,y);
}