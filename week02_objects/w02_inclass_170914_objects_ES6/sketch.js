let circles = [];

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(50);
  circles.push(new Circle(width / 2, height / 2));

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.update();
    c.display();
  }
}