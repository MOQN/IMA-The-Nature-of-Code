function Boundary(_x, _y, _w, _h) {

  this.x = _x;
  this.y = _y;
  this.w = _w;
  this.h = _h;

  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_staticBody;
  bd.position.x = scaleToWorld(this.x);
  bd.position.y = scaleToWorld(this.y);

  var fd = new box2d.b2FixtureDef();
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(this.w / (scaleFactor * 2), this.h / (scaleFactor * 2));

  fd.density = 1.0;
  fd.friction = 0.1;
  fd.restitution = 0.2;

  this.body = world.CreateBody(bd).CreateFixture(fd);

}

Boundary.prototype.display = function() {

  fill(150,0,0);
  stroke(0);
  rectMode(CENTER);
  rect(this.x, this.y, this.w, this.h);

}