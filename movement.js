function Movement(circles, logger) {
  this.circles = circles;
  this.logger = logger;
}

Movement.prototype.move = function(timeDelta) {
  this.circles.forEach(function(circle) {
    circle.pos.multiply(0.9);
    // console.log(circle.pos);
    this.logger.periodicLog(1000, circle.pos);
    circle.pos.add(circle.velocity);
  }.bind(this));
};
