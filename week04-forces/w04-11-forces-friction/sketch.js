var GRAVITY_MAGNITUDE = 1;
var FRICTION_MAGNITUDE = 2;
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
    
    //var wind = createVector(random(0.1,1), 0);
    //p.applyForce(wind);
    
    var gravity = createVector(0, GRAVITY_MAGNITUDE * p.mass);
    p.applyForce(gravity);
    
    var friction = p5.Vector.mult(p.vel, -1);
    friction.normalize();
    friction.mult(FRICTION_MAGNITUDE);
    friction.limit(p.vel.mag()); // ***
    p.applyForce(friction); // air friction? Incorrect! Let's talk about that later :D

    p.checkBoundaries();
    p.update();
    p.display();
  }
}