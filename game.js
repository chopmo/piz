function Game() {
  this.logger          = new Logger();
  this.lastTimestamp   = null;

  this.circles         = this.createCircles();
  this.playerCircle    = this.circles[0];

  this.keyboard        = new Keyboard();
  this.inputController = new InputController(this.playerCircle, new Keyboard());
  this.movement        = new Movement(this.circles, this.logger);
  this.drag            = new Drag(this.circles, this.logger);
  this.renderer        = new Renderer(this.circles);

  this.procesors = [
    this.inputController,
    this.movement,
    this.drag,
    this.renderer
  ]
}

Game.prototype.createCircles = function() {
  return [
    new Circle(new Vector(400, 200), 40, "#AD0021"),
    new Circle(new Vector(200, 200), 40, "#2100FF")
  ];
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
  this.procesors.forEach(function(processor) {
    processor.update(timeDelta);
  });
};

Game.prototype.getCanvas = function() {
  return this.renderer.canvas;
};
