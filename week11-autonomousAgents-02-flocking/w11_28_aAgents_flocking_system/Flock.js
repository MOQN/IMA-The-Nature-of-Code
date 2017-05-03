"use strict";

class Flock {
  constructor(x, y, numOfBoids, sDist, nDist) {
    this.boids = [];
    for (var i = 0; i < numOfBoids; i++) {
      this.boids.push(new Boid(x, y, sDist, nDist));
    }
  }
  run() {
    for (var i = 0; i < this.boids.length; i++) {
      var b = this.boids[i];
      b.flock(this.boids);
      b.update();
      b.checkEdges();
      b.display();
    }
  }
}