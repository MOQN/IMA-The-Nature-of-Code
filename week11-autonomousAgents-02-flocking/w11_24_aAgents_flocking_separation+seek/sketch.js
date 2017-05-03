var boids = [];

function setup() {
  createCanvas(1000, 600);
  for (var i = 0; i < 100; i++) {
    boids.push(new Boid(width/2, height/2));
  }
}

function draw() {
  background(0);
  
  for (var i = 0; i < boids.length; i++) {
    var b = boids[i];
    b.flock(boids);
    b.update();
    b.checkEdges();
    b.display();
  }
}