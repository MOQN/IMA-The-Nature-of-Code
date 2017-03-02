"use strict";

var particles = [];

function setup() {
  createCanvas(500, 500);
  background(0);
  for (var i = 0; i < 3; i++) {
    particles.push(new Particle(i * 150 + 100, height / 2));
  }
}

function draw() {
  background(0);

  // update
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    // check
    var hitState = p.checkBoundaries();

    if (hitState == 1) {
      var hitFriction = p.vel.copy();
      hitFriction.mult(-0.2);
      p.applyForce(hitFriction);
    }
    if (hitState == 2) {
      var hitFriction = p.vel.copy();
      hitFriction.mult(0.2);
      p.applyForce(hitFriction);
    }

    //var wind = createVector(0.5, 0);
    //p.applyForce(wind);

    var gravity = createVector(0, 0.1 * p.mass);
    p.applyForce(gravity);

    var airFriction = p.vel.copy();
    //airFriction.normalize();
    airFriction.mult(-0.001);
    p.applyForce(airFriction);

    p.update();

    // display
    p.display();
  }
}


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-10,10), 0.1);
    this.acc = createVector(0.0, 0.0);
    this.dia = 10;
    this.mass = random(1.1, 10); // 1 !!
  }
  applyForce(force) {
    var f = force.copy();
    //f.div(this.mass);
    this.acc.add(f); // acc = acc + force;
  }
  update() {
    this.vel.add(this.acc); //vel = vel + acc;
    this.pos.add(this.vel); //pos = pos + vel;
    this.acc.mult(0); //acc *= 0;
  }
  checkBoundaries() {
    // x
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x = -this.vel.x;
      return 2;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
      return 2;
    }
    // y
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
      return 1;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
      return 1;
    }
    return 0;
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255);
    noStroke(0);
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    pop();
  }
}