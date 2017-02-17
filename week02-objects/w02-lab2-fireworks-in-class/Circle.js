"use strict";

class Circle {
  constructor(x, y, xspd, yspd) {
    this.x = x;
    this.y = y;
    this.dia = random(5, 10);
    this.xspeed = xspd;
    this.yspeed = yspd;
    // make the circle scattered
    this.distance = 0;
    // to control sequences
    this.seq = 0;
    this.isExploded = false;
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  explode() {
    this.isExploded = true;
    this.xspeed = random(-1, 1) * 22;
    this.yspeed = random(-1, 1) * 22;
  }
  applyGravity(g) {
    this.yspeed += g;
  }
  reduceSpeed(amt) {
    this.xspeed *= amt;
    this.yspeed *= amt;
  }
  displayNormal() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia);
    pop();
  }
  displayAfterExp() {
    this.distance += 0.6;
    for (var angle = 0; angle < 360; angle += 72) {
      push();
      translate(this.x, this.y);
      // ***
      rotate(radians(frameCount));
      // *** radians, but 360 => degree
      rotate(radians(angle));
      fill(255 - this.distance * 4);
      noStroke();
      ellipse(0, 0 + this.distance, this.dia, this.dia);
      // extra graphics. try out!
      //ellipse(0, 0, 5, 5);
      //stroke(255 - this.distance * 4);
      //line(0,0, 0, 0 + this.distance);
      pop();
    }
  }
  run() {
    switch (this.seq) {
      case 0:
        this.move();
        this.applyGravity(0.15);
        this.displayNormal();
        break;
      case 1:
        if (this.isExploded == false) {
          this.explode();
        }
        this.move();
        this.reduceSpeed(0.9);
        this.applyGravity(0.15);
        this.displayNormal();
        break;
      default: // anything else except for 0 and 1
        this.move();
        this.reduceSpeed(0.7);
        this.displayAfterExp();
        break;
    }
  }
}