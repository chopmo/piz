function Renderer(circles) {
  this.circles = circles;
  this.canvas = document.createElement("canvas");
  this.canvas.width = 600;
  this.canvas.height = 400;

  this.context = this.canvas.getContext("2d");
}

Renderer.prototype.render = function() {
  // console.log("rendering");
  this.clear();
  this.drawCircles();
};

Renderer.prototype.clear = function() {
  this.context.fillStyle = "#FFF";
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Renderer.prototype.drawCircles = function() {
  this.circles.forEach(function(circle) {
    var ctx = this.context;
    ctx.fillStyle = "#F30";
    ctx.beginPath();
    ctx.arc(circle.x,
            circle.y,
            circle.size,
            0,
            2 * Math.PI);

    ctx.fill();

  }.bind(this));
}
