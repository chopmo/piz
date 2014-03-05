function Renderer(circles, width, height) {
  this.circles = circles;
  this.canvas = document.createElement("canvas");
  this.canvas.width = width;
  this.canvas.height = height;
  this.context = this.canvas.getContext("2d");
}

Renderer.prototype.update = function(timeDelta) {
  this.clear();
  this.drawCircles();
};

Renderer.prototype.clear = function() {
  this.context.fillStyle = "#EEE";
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Renderer.prototype.drawCircles = function() {
  this.circles.forEach(function(circle) {
    var ctx = this.context;
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.pos.x,
            circle.pos.y,
            circle.size,
            0,
            2 * Math.PI);

    ctx.fill();

  }.bind(this));
}
