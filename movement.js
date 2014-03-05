function Movement(circles, logger) {
  this.circles = circles;
  this.logger = logger;
  this.dragFactor = 0.02;
}

Movement.prototype.move = function(timeDelta) {
  this.circles.forEach(function(circle) {
    circle.velocity.multiply(1 - this.dragFactor);
    circle.pos.add(circle.velocity);
  }.bind(this));
};
