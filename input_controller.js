function InputController(circle, keyboard) {
  this.circle = circle;
  this.keyboard = keyboard;
}

InputController.prototype.update = function(timeDelta) {
  var keys = this.keyboard.keysPressed;
  if(keys.d) { this.circle.x += 1; }
  if(keys.a) { this.circle.x -= 1; }
  if(keys.w) { this.circle.y -= 1; }
  if(keys.s) { this.circle.y += 1; }
};

