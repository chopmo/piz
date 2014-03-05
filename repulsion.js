function Repulsion(circles, logger) {
  this.circles = circles;
  this.logger = logger;

  this.distanceThreshold = 200;
  this.strength = 5;
}

Repulsion.prototype.update = function(timeDelta) {
  this.circles.forEach(function(thisMagnet) {
    this.circles.forEach(function(otherMagnet) {
      if(thisMagnet == otherMagnet) return;

      var offset = otherMagnet.pos.subtract(thisMagnet.pos);
      if(offset.getLength() < this.distanceThreshold) {
        var acceleration = offset.inverse();
        acceleration.multiply(this.strength);
        this.logger.periodicLog(500, acceleration);
        otherMagnet.accelerate(acceleration)
      }
    }.bind(this));
  }.bind(this));
};

