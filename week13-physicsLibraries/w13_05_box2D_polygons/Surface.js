function Surface() {
  this.surface = [];

  // Here we keep track of the screen coordinates of the chain
  
  // there is a bug! will explain during the workshop!
  this.surface.push(new box2d.b2Vec2(0, height * 0.7));
  this.surface.push(new box2d.b2Vec2(width / 2, height-10));
  this.surface.push(new box2d.b2Vec2(width*0.7, height * 0.9));
  this.surface.push(new box2d.b2Vec2(width, height));

  // scale to world
  for (var i = 0; i < this.surface.length; i++) {
    this.surface[i] = scaleToWorld(this.surface[i]);
  }

  // create the surface with b2ChainShape()
  var chain = new box2d.b2ChainShape();
  chain.CreateChain(this.surface, this.surface.length);

  // body!
  var bd = new box2d.b2BodyDef();
  this.body = world.CreateBody(bd);

  // fixture!
  var fd = new box2d.b2FixtureDef();
  fd.shape = chain; // !!!!

  // Some physics
  fd.density = 1.0;
  fd.friction = 0.1;
  fd.restitution = 0.3;

  this.body.CreateFixture(fd);
}

Surface.prototype.display = function() {

  fill(255,150,0);
  beginShape();
  for (var i = 0; i < this.surface.length; i++) {
    var v = scaleToPixels(this.surface[i]);
    vertex(v.x, v.y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}