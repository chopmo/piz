function Movement(circles) {
  this.circles = circles;
}

Movement.prototype.move = function(timeDelta) {
  var circle = this.circles[0];
  circle.x += timeDelta * 0.05;

  if(circle.x > 400) {
    circle.x = 100;
  }
};
