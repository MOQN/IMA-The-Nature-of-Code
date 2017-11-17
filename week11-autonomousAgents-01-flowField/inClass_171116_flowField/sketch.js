var RESOLUTION = 30;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  noFill();

  for (var y = 0; y < height; y += RESOLUTION) {
    for (var x = 0; x < width; x += RESOLUTION) {
      var fluctuationSpeed = 0.5
      var randomness = 0.005;
      
      var freqX = (x + frameCount * fluctuationSpeed) * randomness;
      var freqY = (y + frameCount * fluctuationSpeed) * randomness;
      var noiseValue = noise(freqX, freqY); // range: 0 - 1
      
      var angle = map(noiseValue, 0, 1, 0, PI * 2); 

      var vector = p5.Vector.fromAngle(angle);
      vector.mult(RESOLUTION * 0.5);

      push();
      translate(x, y);

      // comment out this if the sketch is slow
      //stroke(50);
      //rect(0, 0, RESOLUTION, RESOLUTION);
      
      // move to the center of each grid
      push();
      translate(RESOLUTION/2, RESOLUTION/2);
      stroke(255);
      line(0,0, vector.x, vector.y);
      pop();
      
      pop();
    }
  }

}