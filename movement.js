function Movement(circles, logger) {
  this.circles = circles;
  this.logger = logger;
}

Movement.prototype.update = function(timeDelta) {
  this.circles.forEach(function(circle) {
    this.moveObject(circle);
  }.bind(this));
};

Movement.prototype.moveObject = function(object) {
  object.pos.add(object.velocity);
};

