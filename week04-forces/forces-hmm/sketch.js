"use strict";


var particles = [];


function setup() {
  createCanvas(500, 600);
  background(0);

  particles.push(new Particle(random(width), random(height)));
}

function draw() {
  background(0);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    
    var center = createVector(width/2, height/2);
    var gravity = p5.Vector.sub(center, p.pos);
    var cGravity = 0.5;
    gravity.normalize();
    gravity.mult(cGravity * p.mass);
    p.applyForce(gravity);
    
    //p.checkBoundaries();
    p.update();
    p.display();
  }
}


// __________________________________________________________________________


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5,5), random(-5,5));
    this.acc = createVector();
    this.dia = 2;
    this.mass = random(1, 20);
  }
  applyForce(f) {
    f.div(this.mass);
    this.acc.add(f);
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
  checkBoundaries() {
    // x
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
    }
    // y
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
    }
  }
}