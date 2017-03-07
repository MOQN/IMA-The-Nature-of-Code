var planets = [];
var particles = [];


function setup() {
  createCanvas(1200, 800);

  planets.push(new Planet(-300, random(-200, 200), random(80, 120))); // x,y,radius
  planets.push(new Planet(300, random(-200, 200), random(150, 200))); // x,y,radius

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
  for (var j = 0; j < planets.length; j++) {

    var tPlanet = planets[j];

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      // how to create a gravity
      var gravity = p5.Vector.sub(tPlanet.pos, p.pos);
      gravity.normalize();
      gravity.mult(tPlanet.cGravity * p.mass);
      p.applyForce(gravity);

      var distance = p.pos.dist(tPlanet.pos);

      // core area
      if (distance < tPlanet.coreRad) {
        p.vel.mult(tPlanet.cCoreRestitution);
      }
      // water area
      else if (distance < tPlanet.waterRad) {
        // water resistance
        var resistance = p5.Vector.mult(p.vel, -1);
        resistance.normalize();
        var speed = p.vel.mag();
        resistance.mult(speed * speed * tPlanet.cWaterResistance);
        resistance.limit(speed); // ***
        p.applyForce(resistance);
      }
      // air area
      else if (distance < tPlanet.rad) {
        // air resistance
        var resistance = p5.Vector.mult(p.vel, -1);
        resistance.normalize();
        var speed = p.vel.mag();
        resistance.mult(speed * speed * tPlanet.cAirResistance);
        resistance.limit(speed); // ***
        p.applyForce(resistance);
        // wind
        var wind = p.vel.copy();
        wind.normalize();
        wind.rotate(radians(60)); // ***
        wind.mult(tPlanet.cWindMagnitude);
        p.applyForce(wind);
      }

      p.update();
      p.display();
    }
    tPlanet.update();
    tPlanet.display();
  }

  pop();
}