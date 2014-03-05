function InputController(circle, keyboard) {
  this.circle = circle;
  this.keyboard = keyboard;
}

InputController.prototype.update = function(timeDelta) {
  var keys = this.keyboard.keysPressed;
  var acceleration = new Vector(0, 0);

  if(keys.d) { acceleration.x += 1; }
  if(keys.a) { acceleration.x -= 1; }
  if(keys.w) { acceleration.y -= 1; }
  if(keys.s) { acceleration.y += 1; }

  acceleration.normalize();
  acceleration.multiply(timeDelta * 0.03);

  this.circle.accelerate(acceleration);
};

