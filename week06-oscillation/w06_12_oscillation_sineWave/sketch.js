// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 15 2017


function setup() {
  createCanvas(500, 600);
  background(0);
  fill(255);
  stroke(100);
}


function draw() {
  var freq = frameCount * 0.02;
  var amp = 100;
  var sinValue = sin(freq) * amp; // sin(freq) * amp
  
  var x = frameCount % width;
  var y = height / 2 + sinValue;
  
  ellipse(x, y, 3, 3);
  line(0, height / 2, width, height / 2);
}