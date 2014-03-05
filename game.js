function Game() {
  this.logger          = new Logger();
  this.lastTimestamp   = null;

  this.width           = 800;
  this.height          = 600;

  this.playerColor     = "#AD0021";
  this.npcColor        = "#2100AD";

  this.playerCircle    = this.createPlayerCircle();
  this.npcCircles      = this.createNpcCircles();
  this.circles         = [this.playerCircle].concat(this.npcCircles);

  this.circles.unshift(this.playerCircle);

  this.keyboard        = new Keyboard();
  this.inputController = new InputController(this.playerCircle, new Keyboard());
  this.movement        = new Movement(this.circles, this.logger);
  this.drag            = new Drag(this.circles, this.logger);
  this.repulsion       = new Repulsion(this.circles, this.logger);
  this.renderer        = new Renderer(this.circles, this.width, this.height);

  this.procesors = [
    this.inputController,
    this.movement,
    this.drag,
    this.repulsion,
    this.renderer
  ]
}

Game.prototype.createNpcCircles = function() {
  var circles = [];
  for(i = 0; i < 10; i++) {
    var x     = Math.random() * this.width;
    var y     = Math.random() * this.height;
    var size  = Math.random() * 20 + 30;
    var color = this.npcColor;
    circles.push(new Circle(new Vector(x, y), size, color));
  }
  return circles;
};

Game.prototype.createPlayerCircle = function() {
  return new Circle(new Vector(400, 200), 40, this.playerColor);
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
  this.procesors.forEach(function(processor) {
    processor.update(timeDelta);
  });
};

Game.prototype.getCanvas = function() {
  return this.renderer.canvas;
};
