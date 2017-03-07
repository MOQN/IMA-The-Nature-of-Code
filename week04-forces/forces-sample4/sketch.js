"use strict";


var particles = [];


function setup() {
  createCanvas(500, 600);
  background(0);

  particles.push(new Particle(width / 2, 0));
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    var gravity = createVector(0, 1.5 * p.mass);
    p.applyForce(gravity);

    p.checkBoundaries();
    p.update();
    p.display();
  }
}


// __________________________________________________________________________


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.dia = 2;
  }
  applyForce(f) {
    f.div(this.mass);
    this.acc.add(f);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(255);
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    pop();
  }
  checkBoundaries() {
    // x
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
    }
    // y
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
    }
  }
}