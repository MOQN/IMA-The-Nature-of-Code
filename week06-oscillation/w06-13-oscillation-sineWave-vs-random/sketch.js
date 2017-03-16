// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 15 2017


function setup() {
  createCanvas(500, 600);
  background(0);
  fill(255);
  stroke(50);
}


function draw() {
  var freq = frameCount * 0.02;
  var amp = 80;

  var x = frameCount % width;

  // sine wave
  var sinValue = sin(freq) * amp; // sin(freq) * amp
  var y = height * 1 / 3 + sinValue;
  ellipse(x, y, 3, 3);
  line(0, height * 1 / 3, width, height * 1 / 3);

  // random
  var randomValue = random(1) * amp // range from 0 to 1
  y = height * 2 / 3 + randomValue;
  ellipse(x, y, 3, 3);
  line(0, height * 2 / 3, width, height * 2 / 3);
}