// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 9 2017

var img;

function preload() {
  img = loadImage('image-large.png');
}

function setup() {
  createCanvas(600, 600);
  noStroke();
  print(img.width);
}

function draw() {
  background(0);
  image(img,0,0,width,height);
}

