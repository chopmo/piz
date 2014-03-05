function Drag(circles, logger) {
  this.circles             = circles;
  this.logger              = logger;
  this.factor              = 0.03;
  this.stopMotionThreshold = 0.05
}

Drag.prototype.update = function(timeDelta) {
  this.circles.forEach(function(circle) {
    this.applyDrag(circle);
  }.bind(this));
};

Drag.prototype.applyDrag = function(circle) {
  var velocity = circle.velocity.getLength();
  if(velocity == 0) {
    return;
  }

  if(velocity < this.stopMotionThreshold) {
    this.logger.debug("Stopping motion.");
    circle.velocity.reset();
  } else {
    circle.velocity.multiply(1 - this.factor);
  }
};
