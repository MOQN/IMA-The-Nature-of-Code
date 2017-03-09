var particles = [];


function setup() {
  createCanvas(800, 500);
  background(0);

  for (var i = 0; i < 10; i++) {
    particles.push(new Particle(random(width), random(height), random(1, 15))); // (x,y,mass)
    particles[i].vel = createVector(random(-5, 5), random(-5, 5));
  }
}


function draw() {
  background(0);

  for (var a = 0; a < particles.length; a++) {
    for (var b = 0; b < particles.length; b++) {
      if (a != b) {
        particles[a].checkCollision(particles[b]);
      }
    }
    particles[a].update();
    particles[a].checkEdges();
    particles[a].display();
  }
}