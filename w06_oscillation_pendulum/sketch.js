"use strict";

var p;


function setup() {
  createCanvas(500, 600);
  background(0);
  
  p = new Pendulum(width/2, 0, 30);
}

function draw() {
  background(0);

}

class Pendulum {
  constructor(x, y, len) {
    this.origin = createVector(x, y);

    this.armLength = len;

    this.ballPos = createVector();
    this.ballRad = 50;

    this.angle = PI / 4;
    this.aVel = 0.0;
    this.aAcc = 0.0;

    this.damping = 0.995;
  }

  void display() {

    var x = cos(this.angle) * this.armLength;
    var y = sin(this.angle) * this.armLength;
    this.ballPos = createVector(x, y);

    // arm
    stroke(255);
    strokeWeight(3);
    line(this.origin.x, this.origin.y, this.ballPos.x, this.ballPos.y);
    
    // anchor (origin)
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(this.origin.x, this.origin.y,10,10);
    
    // ball
    fill(0);
    ellipse(this.ballPos.x, this.ballPos.y, this.ballRad*2, this.ballRad*2);

  }

}