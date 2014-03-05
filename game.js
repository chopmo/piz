function Game() {
  this.logger          = new Logger();
  this.lastTimestamp   = null;
  this.circles         = this.createCircles();
  this.renderer        = new Renderer(this.circles);
  this.movement        = new Movement(this.circles, this.logger);
  this.keyboard        = new Keyboard();
  this.inputController = new InputController(this.circles[0], this.keyboard);
}

Game.prototype.createCircles = function() {
  var pos = new Vector(300, 200);
  var circle = new Circle(pos, 30, "#F00");
  return [circle];
};

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
  this.inputController.update(timeDelta);
  this.movement.move(timeDelta);
  this.renderer.render();
};

Game.prototype.getCanvas = function() {
  return this.renderer.canvas;
};
