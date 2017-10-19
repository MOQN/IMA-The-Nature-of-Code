// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 15 2017


function setup() {
  createCanvas(500, 600);
  background(0);
  fill(255);
  noStroke();
}


function draw() {
  background(0);

  for (var x = 0; x < width; x++) {
    var freq = (x+frameCount) * 0.01; // here!
    var amp = 100;
    var sinValue = sin(freq) * amp;  // sin(freq) * amp
    
    var y = height/2 + sinValue;
    ellipse(x, y, 2, 2);
  }

}