"use strict";

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.dia = 5;
    this.mass = random(1, 20); // mass is added here!
  }
  applyForce(f) {
    let force = f.copy();
    force.div(this.mass); // *** mass!! ***
    this.acc.add(force);
  }
  update() {
    this.vel.add(this.acc); // vel = vel + acc;
    this.pos.add(this.vel); // pos = pos + vel;
    this.acc.mult(0); // acceleration has to be reset after being applied! ***
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
      this.vel.mult(1.5); // restitution
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
      this.vel.mult(1.5); // restitution
    }
    // y
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
      this.vel.mult(0.7); // restitution
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
      this.vel.mult(0.7); // restitution
    }
  }
}
