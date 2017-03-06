"use strict";

class Particle {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.mass = m;
  }
  applyForce(f) {
    f.div(this.mass);
    this.acc.add(f);
  }
  applyAttraction(other) {
    var force = p5.Vector.sub(other.pos, this.pos);
    force.mult(0.005);
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
    stroke(255);
    fill(255, 100);
    ellipse(0, 0, this.rad * 2 * this.mass, this.rad * 2 * this.mass);
    pop();
  }
}