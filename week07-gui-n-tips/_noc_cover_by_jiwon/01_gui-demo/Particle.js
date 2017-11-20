"use strict";

class Particle {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0.1);
    this.acc = createVector(0, 0);
    this.dia = 5;
    this.mass = random(2, 10);
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

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(255);
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    pop();
  }
  
  displayDebugMode(){
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255);
    noFill();
    ellipse(0, 0, this.dia * this.mass, this.dia * this.mass);
    stroke(255, 0, 0);
    line(0, 0, this.vel.x * 2, this.vel.y * 2);
    pop();
  }
  
  checkBoundaries() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
    }

    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
    }
  }

}