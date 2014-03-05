function Drag(circles, logger) {
  this.circles             = circles;
  this.logger              = logger;
  this.factor              = 0.03;
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

  circle.velocity.multiply(1 - this.factor);
};
