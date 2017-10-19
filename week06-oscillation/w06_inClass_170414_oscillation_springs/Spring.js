"use strict";

class Spring {
  constructor(ballA, ballB, len) {
    this.ballA = ballA;
    this.ballB = ballB;
    this.len = len;
    
    this.k = 0.05;
  }
  display(b) {
    push();
    stroke(255);
    strokeWeight(2);
    line(this.ballA.pos.x, this.ballA.pos.y, this.ballB.pos.x, this.ballB.pos.y);
    pop();
  }
  update() {
    // vector
    var vector = p5.Vector.sub(this.ballA.pos, this.ballB.pos);
    var distance = vector.mag();
    var direction = vector.copy().normalize();
    
    // force
    var stretch = distance - this.len;
    var force = direction.copy();
    // hooke's law
    force.mult(-1 * this.k * stretch);
    this.ballA.applyForce(force);
    force.mult(-1);
    this.ballB.applyForce(force);
  }
}






