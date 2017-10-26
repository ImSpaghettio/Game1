var InputManager = {};

// The keys currently being pressed and
// The keys pressed in the las cycle
InputManager.pressedKeys = [];
InputManager.lastPressedKeys = [];

//------- Add Pressed Keys To pressedKeys -------\\
window.onkeydown = function(key) {
  for (var i = 0; i < InputManager.pressedKeys.length; i++){
    if (key.keyCode == InputManager.pressedKeys[i])
      return;
  }

  InputManager.pressedKeys.push(key.keyCode);
}

//------- Remove Keys No Longer Pressed -------\\
window.onkeyup = function (key) {
  for (var i = 0; i < InputManager.pressedKeys.length; i++) {
    if (InputManager.pressedKeys[i] == key.keyCode) {
      tmp = InputManager.pressedKeys[InputManager.pressedKeys.length -1];
      InputManager.pressedKeys[InputManager.pressedKeys.length -1] = InputManager.pressedKeys[i];
      InputManager.pressedKeys[i] = tmp;
      InputManager.pressedKeys.pop();
    }
  }
}

//------- Update keysPressed And lastKeysPressed ------\\
InputManager.update = function () {
  this.lastPressedKeys = [];

  this.pressedKeys.forEach = function (key){
    this.lastPressedKeys.push(key);
  }
}

//------- Returns True If Key Is In pressedKeys -------\\
InputManager.checkKey = function (key) {
  for (var i = 0; i < this.pressedKeys.length; i++){
    if (this.pressedKeys[i] == key)
      return true;
  }
  return false;
}
