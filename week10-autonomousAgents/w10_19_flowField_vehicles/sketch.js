var RESOLUTION = 50;
var angles = [];
var rows, cols;

var vehicles = [];

function setup() {
  createCanvas(500, 600);
  rows = floor(width / RESOLUTION);
  cols = floor(height / RESOLUTION);

  for (var i = 0; i < 50; i++) {
    vehicles.push(new Vehicle(width, random(100,150)));
  }
}

function draw() {
  background(255);

  // flow field
  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {

      var index = r + c * rows; // *** x + y * width

      var x = r * RESOLUTION;
      var y = c * RESOLUTION;

      var xfreq = (x + frameCount) * 0.001;
      var yfreq = (y + frameCount) * 0.001;
      var amp = TWO_PI; // range of angle
      var val = noise(xfreq, yfreq) * amp;

      angles[index] = val;

      push();
      translate(x, y);

      // noFill();
      // stroke(200);
      // rect(0, 0, RESOLUTION, RESOLUTION);
      // text(index, 5, 15);

      rotate(val);
      stroke(200);
      line(0, 0, RESOLUTION / 2, 0);

      pop();
    }
  }

  // vehicles
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];

    var r = floor(v.pos.x / RESOLUTION);
    var c = floor(v.pos.y / RESOLUTION);
    var index = r + c * rows;

    v.flow(angles[index]);
    v.update();
    v.checkEdges();
    v.display();
  }
}