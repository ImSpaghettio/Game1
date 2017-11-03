var InputManager = {};

// The keys currently being pressed and
// The keys pressed in the las cycle
InputManager.pressedKeys = [];
InputManager.lastPressedKeys = [];
InputManager.queriedKeys = [];
InputManager.upQueriedKeys = [];
InputManager.delQueriedKeys = [];
InputManager.delPressedKeys = []

//------- Add Pressed Keys To queriedKeys -------\\
window.onkeydown = function(key) {
  // If the keys is already in pressedKeys then don't add
  for (var i = 0; i < InputManager.pressedKeys.length; i++){
    if (key.keyCode == InputManager.pressedKeys[i])
      return;
  }

  InputManager.queriedKeys.push(key.keyCode);
}

//------- Remove Keys No Longer Pressed -------\\
window.onkeyup = function (key) {
  InputManager.upQueriedKeys.push(key.keyCode);
}

//------- Update keysPressed And lastKeysPressed ------\\
InputManager.update = function () {
  this.lastPressedKeys = [];

  for (var i = 0; i < this.pressedKeys.length; i++) {
    this.lastPressedKeys.push(this.pressedKeys[i]);
  }

  for (var i = 0; i < this.upQueriedKeys.length; i++) {
    for (j = 0; j < this.pressedKeys.length; j++) {
      if (this.upQueriedKeys[i] == this.pressedKeys[j]) {
        this.delQueriedKeys.push(i);
        this.delPressedKeys.push(j);
      }
    }
  }

  for (var i = 0; i < this.delQueriedKeys.length; i++) {
    this.pressedKeys.splice(this.delPressedKeys.pop(), 1);
    this.upQueriedKeys.splice(this.delQueriedKeys.pop(), 1);
  }

  for (var i = 0; i < this.queriedKeys.length; i++) {
      this.pressedKeys.push(this.queriedKeys[i]);
  }

  this.queriedKeys = [];

}

//------- Returns True If Key Is In pressedKeys -------\\
InputManager.checkKey = function (key) {
  for (var i = 0; i < this.pressedKeys.length; i++){
    if (this.pressedKeys[i] == key)
      return true;
  }
  return false;
}

//------- Returns True If Key Is In lastPressedKeys -------\\
InputManager.checkLastKey = function (key) {
  for (var i = 0; i < this.lastPressedKeys.length; i++){
    if (this.lastPressedKeys[i] == key)
      return true;
  }
  return false;
}
