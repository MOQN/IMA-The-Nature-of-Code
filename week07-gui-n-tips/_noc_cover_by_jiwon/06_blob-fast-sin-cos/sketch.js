"use strict";

var cosArray = [];
var sinArray = [];
var RES = 360;

var blobs = [];

var params = {
  debugMode: false,
  fastSinCos: true
}

var gui = new dat.gui.GUI();
gui.add(params, 'debugMode');
gui.add(params, 'fastSinCos');

function setup() {
  createCanvas(500, 500);
  noStroke();

  for (var i = 0; i < 100; i++) {
    blobs.push(new Blob(random(width), random(height), random(0.5, 0.9)));
  }

  for (var i = 0; i < RES; i++) {
    var angle = map(i, 0, RES, 0, TWO_PI);
    cosArray.push(cos(angle));
    sinArray.push(sin(angle));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].update();
    blobs[i].display();
    //particles[i].display();
  }

  fill(255, 0, 0);
  text(round(frameRate()), 25, 25);
}

function fastSin(radian) {
  var index = floor(map(radian % TWO_PI, 0, TWO_PI, 0, RES));
  return sinArray[index];
}

function fastCos(radian) {
  var index = floor(map(radian % TWO_PI, 0, TWO_PI, 0, RES));
  return cosArray[index];
}


class Particle {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dia = random(50, 75);
    this.angle = random(TWO_PI);
    this.aVel = random(0.01, 0.05);
    this.distance = random(2, 5);
  }

  display() {
    this.angle += this.aVel;

    if (params.fastSinCos) {
      this.pos.x = fastCos(this.angle) * this.distance;
      this.pos.y = fastSin(this.angle) * this.distance;
      var dia = this.dia + fastSin(this.angle) * this.distance;
    } 
    else {
      this.pos.x = cos(this.angle) * this.distance;
      this.pos.y = sin(this.angle) * this.distance;
      var dia = this.dia + sin(this.angle) * this.distance;
    }


    if (params.debugMode) {
      var vector = p5.Vector.fromAngle(this.angle);
      vector.normalize();
      vector.setMag(25);
      stroke(255, 0, 0);
      line(this.pos.x, this.pos.y, vector.x, vector.y);
      stroke(255);
      noFill();
    } else {
      noStroke();
      fill(255, 50);
    }

    ellipse(this.pos.x, this.pos.y, dia, dia);
    ellipse(this.pos.x, this.pos.y, dia + 10, dia + 10);
    ellipse(this.pos.x, this.pos.y, dia + 15, dia + 15);

  }
}

class Blob {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.size = size;
    this.sizeFreq = random(0.01, 0.05);
    this.scale = 1.0;
    this.particles = [];
    var randNum = floor(random(5, 8));
    for (var i = 0; i < randNum; i++) {
      this.particles.push(new Particle(0, 0));
    }
  }

  update() {
    if (params.fastSinCos) {
      this.scale = this.size * map(sin(frameCount * this.sizeFreq), -1, 1, 0.9, 1.1);
    } else {
      this.scale = this.size * map(fastSin(frameCount * this.sizeFreq), -1, 1, 0.9, 1.1);
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    scale(this.scale);
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
    pop();
  }
}