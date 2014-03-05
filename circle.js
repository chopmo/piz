function Circle(pos, size, color) {
  this.pos      = pos;
  this.size     = size;
  this.color    = color;
  this.velocity = new Vector(0, 0);
}

Circle.prototype.accelerate = function(acceleration) {
  this.velocity.add(acceleration);
};
