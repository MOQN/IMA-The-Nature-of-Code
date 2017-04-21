"use strict";

class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(4,3);
    this.acc = createVector();
    this.angle = 0;

    this.maxSpeed = 5;
    this.maxForce = 0.1;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle = this.vel.heading();
  }
  seek(target) {
    var desired = p5.Vector.sub(target.pos, this.pos);
    desired.normalize();
    desired.mult(this.maxSpeed);

    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }
  checkWalls() {
    // x
    if (this.pos.x < MARGIN) {
      var desired = createVector(this.maxSpeed, this.vel.y);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    } else if (this.pos.x > width - MARGIN) {
      var desired = createVector(-this.maxSpeed, this.vel.y);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
    // y
    if (this.pos.y < MARGIN) {
      var desired = createVector(this.vel.x, this.maxSpeed);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    } else if (this.pos.y > height - MARGIN) {
      var desired = createVector(this.vel.x, -this.maxSpeed);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }
  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  applyForce(force) {
    this.acc.add(force);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    stroke(255);
    fill(200);
    triangle(0, 0, -15, -5, -15, 5);

    pop();
  }
}