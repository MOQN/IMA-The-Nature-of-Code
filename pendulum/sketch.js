"use strict";

var p;

function setup() {
  createCanvas(500, 600);
  background(0);
  
  p = new Pendulum( width/2, 100, 200);
}

function draw() {
  background(0);
  p.updateBallPostion();
  p.display();
}


class Pendulum {
  constructor(x, y, len) {
    this.origin = createVector(x, y);
    this.armLength = len;
    this.ball = createVector();
    this.ballMass = 50;
    
    this.angle = 0;
    this.aVel = 0;
    this.aAcc = 0;
    
    this.damping = 0.98;
  }
  
  updateBallPostion() {
    this.ball.x = cos(this.angle + PI/2) * this.armLength;
    this.ball.y = sin(this.angle + PI/2) * this.armLength;
  }
  
  display() {
    push();
    translate(this.origin.x, this.origin.y);
    
    // arm
    stroke(255);
    strokeWeight(3);
    line(0,0,this.ball.x, this.ball.y);
    
    // anchor (origin)
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(0,0,20,20);
    
    // ball
    ellipse(this.ball.x, this.ball.y, this.ballMass, this.ballMass);
    
    pop();
  }
  
}