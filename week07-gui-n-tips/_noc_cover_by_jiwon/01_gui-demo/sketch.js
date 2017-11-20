//https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage

var particles = [];

//variable: initial value
var params = {
  debugMode: false,
  numParticles: 0,
  addParticle: function() {
    particles.push(new Particle(random(width), 0));
    params.numParticles = particles.length;
  },
  gravity: 0.5,
  wind: 0.1,
  friction: 0
};

var gui = new dat.gui.GUI();
gui.add(params, 'debugMode');
gui.add(params, 'numParticles').listen();
gui.add(params, 'addParticle');
gui.add(params, 'gravity', 0.5, 2.5, 0.25);
gui.add(params, 'wind', -1.5, 1.5, 0.1);
gui.add(params, 'friction', 0, 2.5, 0.25);



function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < 5; i++) {
    particles.push(new Particle(random(width), 0));
  }

  params.numParticles = particles.length;

}

function draw() {
  if (params.debugMode) {
    background(0);
    fill(255);
    text(round(frameRate()), 25, 25);
    //frameRate(10);
  } else {
    background(0, 50);
    //?
    //frameRate(60);
  }

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    var wind = createVector(params.wind, 0);
    p.applyForce(wind);

    var gravity = createVector(0, params.gravity * p.mass);
    p.applyForce(gravity);

    var friction = p5.Vector.mult(p.vel, -1);
    friction.normalize();
    friction.mult(params.friction);
    friction.limit(p.vel.mag());
    p.applyForce(friction);

    p.checkBoundaries();
    p.update();
    if (params.debugMode) {
      p.displayDebugMode();
    } else {
      p.display();
    }
  }
}

function keyPressed() {
  particles.push(new Particle(random(width), 0));
  params.numParticles = particles.length;
}