function Repulsion(circles, logger) {
  this.circles = circles;
  this.logger = logger;

  this.distanceThreshold = 200;
  this.strength = 120;
}

Repulsion.prototype.update = function(timeDelta) {
  this.circles.forEach(function(thisMagnet) {
    this.circles.forEach(function(otherMagnet) {
      if(thisMagnet == otherMagnet) return;

      var offset = otherMagnet.pos.clone().subtract(thisMagnet.pos);
      var push = this.getPush(offset);
      otherMagnet.accelerate(push);

    }.bind(this));
  }.bind(this));
};


Repulsion.prototype.getPush = function(offset) {
  if(offset.getLength() > this.distanceThreshold) {
    return Vector.zeroVector();
  }

  var dist = offset.getLength();
  var force = (1 / Math.pow(dist, 1.7)) * this.strength;

  return offset.clone().normalize().multiply(force);
};

