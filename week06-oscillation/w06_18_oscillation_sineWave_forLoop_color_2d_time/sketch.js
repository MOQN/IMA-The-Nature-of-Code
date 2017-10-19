// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 15 2017


function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}


function draw() {
  background(0);

  var resolution = 5;
  for (var y = 0; y < height; y += resolution) {
    for (var x = 0; x < width; x += resolution) {

      var freq1 = (x + frameCount) * 0.1;
      var sinValue1 = sin(freq1);
      var w1 = map(sinValue1, -1, 1, 0, 255);

      var freq2 = (y + frameCount) * 0.1;
      var sinValue2 = sin(freq2);
      var w2 = map(sinValue2, -1, 1, 0, 255);

      var white = (w1 + w2) / 2;
      fill(white);
      rect(x, y, resolution, resolution);
    }
  }
}