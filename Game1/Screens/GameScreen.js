var GameScreen = {}

GameScreen.clock = new Clock();

//------- Initialize All Elements Of GameScreen -------\\
GameScreen.initialize = function () {
  Map.initialize();
  Character.initialize();
  Inventory.initialize();
  var isMoving = false, axis, posChange;
}

//------- Update All Elements Of GameScreen -------\\
GameScreen.update = function () {
  Map.update();
  Character.update();
  this.checkMovement();
  this.checkInventory();
}

//------- Check For Character Movement -------\\
GameScreen.checkMovement = function() {
  // Check if a move key is down
  if (!this.isMoving && InputManager.checkKey(GameSettings.UP)) {
    if (Map.checkLimits(Character.posOnMapX, Character.posOnMapY, 'up')) {
      Character.move('up');
      this.isMoving = true;
      this.axis  = 'y';
      this.posChange = -1

      this.clock.startTimer(GameSettings.WALKTIME);
    }

    else Character.face('up');
  }

  else if (!this.isMoving && InputManager.checkKey(GameSettings.DOWN)) {
    if (Map.checkLimits(Character.posOnMapX, Character.posOnMapY, 'down')) {
      Character.move('down');
      this.isMoving = true;
      this.axis  = 'y';
      this.posChange = 1;

      this.clock.startTimer(GameSettings.WALKTIME);
    }

    else Character.face('down');
  }

  else if (!this.isMoving  && InputManager.checkKey(GameSettings.LEFT)) {
    if (Map.checkLimits(Character.posOnMapX, Character.posOnMapY, 'left')) {
      Character.move('left');
      this.isMoving = true;
      this.axis  = 'x';
      this.posChange = -1;

      this.clock.startTimer(GameSettings.WALKTIME);
    }
    else Character.face('left');
  }

  else if (!this.isMoving && InputManager.checkKey(GameSettings.RIGHT)) {
    if (Map.checkLimits(Character.posOnMapX, Character.posOnMapY, 'right')) {
      Character.move('right');
      this.isMoving = true;
      this.axis  = 'x';
      this.posChange = 1;

      this.clock.startTimer(GameSettings.WALKTIME);
    }

    else Character.face('right');
  }

  // If the character is moving then continue animation
  if (this.isMoving){
    this.clock.updateTime();
    Character.continueMove(this.clock.getTime());
    Map.setChange(this.axis, this.clock.getTime(), this.posChange * -1)

    if (this.clock.isDone){
      this.isMoving = false;
      Map.resetChange();
      Character.changePos(this.posChange, this.axis);
    }
  }
}

GameScreen.checkInventory = function() {
  if (InputManager.checkKey(GameSettings.INVENTORY) && !InputManager.checkLastKey(GameSettings.INVENTORY)) {
    Inventory.isShowing = Inventory.isShowing ? false : true;
  }
}

//------- Draw All Elements Of GameScreen -------\\
GameScreen.draw = function () {
  Map.draw();
  Character.draw();
  Inventory.draw();
}
