var GRAVITY_MAGNITUDE = 1;
var particles = [];


function setup() {
  createCanvas(500, 600);
  background(0);

  particles.push(new Particle(100, height / 2));
  particles.push(new Particle(250, height / 2));
  particles.push(new Particle(400, height / 2));

}


function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    
    var wind = createVector(random(0.5, 1), 0);
    p.applyForce(wind);
    
    var gravity = createVector(0, GRAVITY_MAGNITUDE);
    p.applyForce(gravity);

    p.checkBoundaries();
    p.update();
    p.display();
  }
}