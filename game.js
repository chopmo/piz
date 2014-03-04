function Game() {
  this.lastTimestamp = null;

  this.renderer = new Renderer();
}

Game.prototype.run = function() {
  this.requestNextFrame();
};

Game.prototype.requestNextFrame = function() {
  window.requestAnimationFrame(this.tick.bind(this));
};

Game.prototype.tick = function(timestamp) {
  var timeDelta = this.lastTimestamp ? timestamp - this.lastTimestamp : 0;

  this.update(timeDelta);

  this.lastTimestamp = timestamp;
  this.requestNextFrame();
};

Game.prototype.update = function(timeDelta) {
  this.renderer.render();
};

Game.prototype.getCanvas = function() {
  return this.renderer.canvas;
};

