var numOfBalls = 5;
var balls = [];
var spring = [];

function setup() {
  createCanvas(500, 600);
  background(0);

  for (var i = 0; i < numOfBalls; i++) {
    balls.push(new Ball(random(width), random(height)));
  }
  for (var i = 0; i < balls.length; i++) {
    if (i < balls.length - 1) {
      spring.push(new Spring(balls[i], balls[i + 1], 100));
    } else {
      spring.push(new Spring(balls[i], balls[0], 100));
    }

  }
}

function draw() {
  background(0);

  for (var i = 0; i < spring.length; i++) {
    spring[i].update();
    spring[i].display();
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].drag();
    balls[i].display();
  }
}