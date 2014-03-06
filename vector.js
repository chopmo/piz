function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.clone = function() {
  return new Vector(this.x, this.y);
};

Vector.prototype.getLength = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
};

Vector.prototype.divide = function(divident) {
  this.x = this.x / divident;
  this.y = this.y / divident;
  return this;
};

Vector.prototype.multiply = function(factor) {
  this.x = this.x * factor;
  this.y = this.y * factor;
  return this;
};

Vector.prototype.normalize = function() {
  var len = this.getLength();
  if(len == 0) {
    return this;
  }

  this.divide(this.getLength());
  return this;
};

Vector.prototype.add = function(other) {
  this.x += other.x;
  this.y += other.y;
  return this;
};

Vector.prototype.reset = function() {
  this.x = 0;
  this.y = 0;
  return this;
};

Vector.prototype.subtract = function(other) {
  this.x -= other.x;
  this.y -= other.y;
  return this;
};

Vector.zeroVector = function() {
  return new Vector(0, 0);
};

