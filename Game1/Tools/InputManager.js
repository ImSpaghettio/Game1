var InputManager = {};

// The keys currently being pressed and
// The keys pressed in the las cycle
InputManager.pressedKeys = [];
InputManager.lastPressedKeys = [];
InputManager.queriedKeys = [];
InputManager.upQueriedKeys = [];
InputManager.delQueriedKeys = [];
InputManager.delPressedKeys = [];
InputManager.mouseX;
InputManager.mouseY;
InputManager.clicked = false;
InputManager.realClick = false;
InputManager.lastRealClick = false;

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

//------- Gets The Mouse Position -------\\
window.addEventListener('mousemove', function(e) {
  InputManager.mouseX = e.pageX;
  InputManager.mouseY = e.pageY;
})

window.onmousedown = function(e) {
  e = e || window.event;
   if ("buttons" in e) {
       InputManager.clicked = e.buttons == 1;
   }
   else {
     var button = e.which || e.button;
     InputManager.clicked = button == 1
  }
}

//------- Update keysPressed And lastKeysPressed ------\\
InputManager.update = function () {
  this.lastPressedKeys = [];
  this.lastRealClick = this.realClick;
  this.realClick = this.clicked;
  this.clicked = false;

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

//------- Checks If A Position Is In A Square -------\\
InputManager.checkClickBounds = function(x,y,width, height) {
  if (!this.lastRealClick && this.realClick) {
    if (this.mouseX > x && this.mouseX < x + width
      && this.mouseY > y && this.mouseY < y + height)
      return true;
  }
  return false;
}

//-------- Checks For A Left Click -------\\
InputManager.checkClick = function() {
  return (!this.lastRealClick && this.realClick)
}
