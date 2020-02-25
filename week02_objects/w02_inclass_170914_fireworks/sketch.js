let circles = [];

function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 300; i++) {
    circles[i] = new Circle(width / 2, height, -10);
  }
}
function draw() {
  background(0,15);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.update();
    c.applyGravity(0.1);
    c.display();
  }
}
function keyPressed() {
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.explode();
  }
}