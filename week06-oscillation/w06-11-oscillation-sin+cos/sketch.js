// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 15 2017

var x, y;

function setup() {
  createCanvas(500, 600);
  background(0);
  noStroke();
}


function draw() {
  background(0);

  /*   sin(freq or angle) * amp   */
  var angle = frameCount * 0.05;
  var sinValue = sin(angle);
  var cosValue = cos(angle);
  
  
  translate(width / 2, height / 2);
  
  //cosine
  x = cosValue * 100;
  y = -150
  fill(200,0,255);
  ellipse(x, y, 20, 20);
  text( "cos: " + round(sinValue), x + 20, y);
  
  //sine
  x = -150;
  y = sinValue * 100;
  fill(255,255,0);
  ellipse(x, y, 20, 20);
  text( "sin: " + round(sinValue), x + 20, y);
  
  // circular movement
  x = cosValue * 100;
  y = sinValue * 100;
  fill(255,0,0);
  ellipse(x, y, 30, 30);
}