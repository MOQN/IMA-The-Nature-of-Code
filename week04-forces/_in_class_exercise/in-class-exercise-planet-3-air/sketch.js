var planet;
var particles = [];


function setup() {
  createCanvas(1200, 800);

  planet = new Planet(0, 0, 200); // x,y,radius

  for (var i = 0; i < 30; i++) {
    particles.push(new Particle(-width / 2, -height / 2));
  }
}


function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  // create zoom-in & out
  var s = map(mouseY, 0, height, 0.5, 1.5);
  scale(s);

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    // how to create a gravity
    var gravity = p5.Vector.sub(planet.pos, p.pos);
    gravity.normalize();
    gravity.mult(planet.cGravity * p.mass);
    p.applyForce(gravity);

    var distance = p.pos.dist(planet.pos);

    // core area
    if (distance < planet.coreRad) {
      p.vel.mult(planet.cCoreRestitution);
    }
    // water area
    else if (distance < planet.waterRad) {
      // water resistance
      var resistance = p5.Vector.mult(p.vel, -1);
      resistance.normalize();
      var speed = p.vel.mag();
      resistance.mult(speed * speed * planet.cWaterResistance);
      resistance.limit(speed); // ***
      p.applyForce(resistance);
    }
    // air area
    else if (distance < planet.rad) {
      // air resistance
      var resistance = p5.Vector.mult(p.vel, -1);
      resistance.normalize();
      var speed = p.vel.mag();
      resistance.mult(speed * speed * planet.cAirResistance);
      resistance.limit(speed); // ***
      p.applyForce(resistance);
      // wind
      var wind = p.vel.copy();
      wind.normalize();
      wind.rotate(radians(60)); // ***
      wind.mult(planet.cWindMagnitude);
      p.applyForce(wind);
    }

    p.update();
    p.display();
  }
  planet.update();
  planet.display();

  pop();
}