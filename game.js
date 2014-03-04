function Game() {
  this.lastTimestamp = null;
  this.circles = [
    new Circle(50, 50, 30, "#F00")
  ];
  this.renderer = new Renderer(this.circles);
  this.movement = new Movement(this.circles);
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
  this.movement.move(timeDelta);
  this.renderer.render();
};

Game.prototype.getCanvas = function() {
  return this.renderer.canvas;
};
