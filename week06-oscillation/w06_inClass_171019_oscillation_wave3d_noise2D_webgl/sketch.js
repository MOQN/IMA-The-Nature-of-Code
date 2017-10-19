function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  
  rotateY(frameCount * 0.01);
  
  var resolution = 15;
  for (var z = -width/2; z < width/2; z += resolution) {
    for (var x = -width/2; x < width/2; x += resolution) {
      var freq1 = (frameCount + x) * 0.005;
      var freq2 = (frameCount + z) * 0.005;
      var amp = -120;
      var noiseVal = noise(freq1, freq2) * amp;
      var y = 200 + noiseVal;
      
      drawBox(x,y,z,5);
    }
  }
}


function drawBox(x,y,z,s) {
  push();
  translate(x,y,z);
  box(s);
  pop();
}


