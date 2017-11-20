"use strict";

class Particle {

  constructor(x, y, startLife) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0.1);
    this.acc = createVector(0, 0);
    this.dia = 5;
    this.mass = random(2, 10);

    this.lifespan = 1.0;
    this.lifeDecrease = random(0.005, 0.01);
    this.isDone = false;
  }

  applyForce(force) {
    force.div(this.mass);
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  updateLifespan() {
    this.lifespan -= this.lifeDecrease;
    if (this.lifespan < 0) {
      this.lifespan = 0.0;
      this.isDone = true;
    }
    if (this.lifespan < 0.1) {
      this.dia *= this.lifespan * 10;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(255, map(this.lifespan, 0.0, 1.0, 255, 0));
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    pop();
  }

  displayDebugMode() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255);
    fill(map(this.lifespan, 0.0, 1.0, 0, 255));
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    stroke(255, 0, 0);
    line(0, 0, this.vel.x * 2, this.vel.y * 2);
    pop();
  }

  checkBoundaries() {
    if (this.pos.y < 0) {
      this.pos.y = 0;
      //return true;
      this.vel.y = -this.vel.y;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
    }

    if (this.pos.x < 0) {
      this.pos.x = 0;
      //return true;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      //return true;
      this.vel.x = -this.vel.x;
    }
  }

}