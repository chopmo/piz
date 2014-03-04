function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.getLength = function() {
  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
};

Vector.prototype.divide = function(divident) {
  this.x = this.x / divident;
  this.y = this.y / divident;
};

Vector.prototype.normalize = function() {
  this.divide(this.getLength());
};
