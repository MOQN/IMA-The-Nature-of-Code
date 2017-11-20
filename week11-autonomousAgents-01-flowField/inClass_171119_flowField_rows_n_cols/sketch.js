"use strict"

var SHOW_FLOWFIELD = true;
var RESOLUTION = 30;
var rows, cols;
var angles = [];

var vehicles = [];


function setup() {
  createCanvas(500, 600);

  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  for (var i = 0; i < 50; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }

}

function draw() {
  background(255);

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      var x = r * RESOLUTION;
      var y = c * RESOLUTION;

      // noise
      var fluctuation = 0.5;
      var randomness = 0.01;
      var freqX = (x + frameCount * fluctuation) * randomness;
      var freqY = (y + frameCount * fluctuation) * randomness;
      var noiseValue = noise(freqX, freqY); // 0 - 1 
      var angleFromNoise = noiseValue * TWO_PI; // 0 - 360 

      // Mouse
      var angleAdj = sin(frameCount * 0.01) * PI;

      var pos = createVector(x + RESOLUTION / 2, y + RESOLUTION / 2);
      var mousePos = createVector(mouseX, mouseY);
      var vector = p5.Vector.sub(mousePos, pos);
      var angleFromMouse = vector.heading();

      var angle = angleFromNoise;

      var index = r + c * rows; // x + y * width
      angles[index] = angle;

      if (SHOW_FLOWFIELD) {
        push();
        translate(x, y);

        noFill();
        //stroke(200);
        //rect(0,0,RESOLUTION, RESOLUTION);

        push();
        translate(RESOLUTION / 2, RESOLUTION / 2);

        rotate(angle);
        stroke(0);
        line(0, 0, RESOLUTION / 2, 0);
        pop();

        pop();
      }
    }
  }







  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];

    //var target = createVector(mouseX, mouseY);
    //v.seek(target);

    var r = floor(v.pos.x / RESOLUTION);
    var c = floor(v.pos.y / RESOLUTION);
    var index = r + c * rows;

    v.flow(angles[index]);

    v.update();
    v.checkEdges();
    v.display();
  }
}