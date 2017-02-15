// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 14 2017

var img;

function setup() {
  createCanvas(600, 600);
  noStroke();
  img = loadImage('image-large.png');
  print("A");
}

function draw() {
  background(0);
  
  print("B");
  if (img.width > 1) {
    print("C");
    noLoop();
  }
  image(img,0,0,width,height);
}

