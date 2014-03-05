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
};

Vector.prototype.multiply = function(factor) {
  this.x = this.x * factor;
  this.y = this.y * factor;
};

Vector.prototype.normalize = function() {
  var len = this.getLength();
  if(len == 0) {
    return;
  }

  this.divide(this.getLength());
};

Vector.prototype.add = function(other) {
  this.x += other.x;
  this.y += other.y;
};

Vector.prototype.reset = function() {
  this.x = 0;
  this.y = 0;
};

Vector.prototype.subtract = function(other) {
  return new Vector(this.x - other.x, this.y - other.y)
};

Vector.zeroVector = function() {
  return new Vector(0, 0);
};

