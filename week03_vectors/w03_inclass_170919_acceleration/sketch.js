"use strict";

class Circle {
  constructor() {
    this.pos = createVector(random(width), random(height) );
    this.vel = createVector(0, 0);
    this.acc = createVector();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //***

    //
    this.vel.mult(0.96);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);
    pop();
  }
  applyForce() {
    let vector = createVector(mouseX, mouseY);
    vector.sub(this.pos);
    vector.mult(0.01);
    this.acc = vector;
  }
}

let circles = [];

function setup() {
  createCanvas(500, 600);

  for (let i = 0; i < 50; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.applyForce();
    c.update();
    c.display();
  }
}