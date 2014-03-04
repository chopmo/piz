function Renderer() {
  this.canvas = document.createElement("canvas");
  this.canvas.width = 600;
  this.canvas.height = 400;

  this.context = this.canvas.getContext("2d");
}

Renderer.prototype.render = function() {
  // console.log("rendering");
  this.context.fillStyle = "#000";
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}
