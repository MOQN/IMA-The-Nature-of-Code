// constructor function
function Box(_x, _y) {
  this.w = random(10,20);
  this.h = random(10,20);

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(_x, _y);

  // Define a fixture
  var fd = new box2d.b2FixtureDef();
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

  // Some physics
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;

  // Create the body and Attach the fixture
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);

  // add movement and rotation
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5, 5));

}


Box.prototype.display = function() {
  // Get the body's position
  var pos = scaleToPixels(this.body.GetPosition());
  // Get its angle of rotation
  var a = this.body.GetAngleRadians();

  // Draw it!
  rectMode(CENTER);
  push();
  translate(pos.x, pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  pop();
  
  print(this.body.GetPosition().x + "  " + pos.x);
}


// to remove the particle from the box2d world
Box.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Box.prototype.isDone = function() {
  // Let's find the screen position of the particle
  var pos = scaleToPixels(this.body.GetPosition());
  // Is it off the bottom of the screen?
  if (pos.y > height + this.w * this.h) {
    this.killBody();
    return true;
  }
  return false;
}