var particles = [];


function setup() {
  createCanvas(500, 600);
  for (var i = 0; i < 10; i++) {
    var pos = createVector(random(width), random(height));
    var clr = color(random(255),random(255),random(255));
    particles.push(new Circle(pos,clr));
  }
}


function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].bounce();
    particles[i].display();
  }
}