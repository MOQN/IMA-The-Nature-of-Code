"use strict";

class Particle {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dia = random(50, 80);
    this.angle = random(TWO_PI);
    this.aVel = random(0.01, 0.05);
    this.distance = random(25, 50);
  }
  
  display() {
    this.angle += this.aVel;
    var dia = this.dia + sin(this.angle) * this.distance;
    
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, dia, dia);
  }

}