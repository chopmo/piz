function Movement(circles, logger) {
  this.circles = circles;
  this.logger = logger;
  this.dragFactor = 0.03;
  this.stopMotionThreshold = 0.05
}

Movement.prototype.update = function(timeDelta) {
  this.circles.forEach(function(circle) {
    this.applyDrag(circle);
    this.moveObject(circle);
  }.bind(this));
};

Movement.prototype.moveObject = function(object) {
  object.pos.add(object.velocity);
};

Movement.prototype.applyDrag = function(circle) {
  var velocity = circle.velocity.getLength();
  if(velocity == 0) {
    return;
  }

  if(velocity < this.stopMotionThreshold) {
    this.logger.debug("Stopping motion.");
    circle.velocity.reset();
  } else {
    circle.velocity.multiply(1 - this.dragFactor);
  }
};
