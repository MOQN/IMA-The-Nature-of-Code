function setup() {
  createCanvas(800, 300);
  background(255);

  cantor(0, 0, width);
}

function draw() {
  noLoop();
}


function cantor(x, y, len) {

  var h = 40;

  if (len >= 1) {
    noStroke();
    fill(0);
    rect(x, y, len, h / 3);
    y += h;
    
    cantor(x, y, len / 3);
    cantor(x + len * 2 / 3, y, len / 3);
  }
}