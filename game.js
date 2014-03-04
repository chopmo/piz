function Game() {
  this.lastTimestamp = null;
}

Game.prototype.run = function() {
  this.requestNextFrame();
};

Game.prototype.requestNextFrame = function() {
  window.requestAnimationFrame(this.tick.bind(this));
};

Game.prototype.tick = function(timestamp) {
  var timeDelta = this.lastTimestamp ? timestamp - this.lastTimestamp : 0;

  console.log(timeDelta);

  this.lastTimestamp = timestamp;
  this.requestNextFrame();
};

