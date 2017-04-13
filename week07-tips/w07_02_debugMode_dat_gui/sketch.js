var params = {
  debugMode: false,
  diameter: 100,
  vibrationRange: 5
}

var gui = new dat.gui.GUI();
gui.add(params, 'debugMode');
gui.add(params, 'diameter');
gui.add(params, 'vibrationRange');



function setup() {
  createCanvas(500, 600);
  background(0);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  if (params.debugMode) {
    noFill();
    stroke(255);
  } else {
    fill(255);
    noStroke();
  }
  for (var i = 0; i < 5; i++) {
    var vX = random(-params.vibrationRange, params.vibrationRange);
    var vY = random(-params.vibrationRange, params.vibrationRange);
    ellipse(x + vX, y + vY, params.diameter, params.diameter);
  }

}