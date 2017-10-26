var GameScreen = {}

GameScreen.clock = new Clock();

//------- Initialize All Elements Of GameScreen -------\\
GameScreen.initialize = function () {
  Map.initialize();
  Character.initialize();
  var isMoving = false, axis, posChange;
}

//------- Update All Elements Of GameScreen -------\\
GameScreen.update = function () {
  Map.update();
  Character.update();

  // Check if a move key is down
  if (!this.isMoving && InputManager.checkKey(GameSettings.UP)) {
    Character.move('up');
    this.isMoving = true;
    this.axis  = 'y';
    this.posChange = -1

    this.clock.startTimer(GameSettings.WALKTIME);
  }

  else if (!this.isMoving && InputManager.checkKey(GameSettings.DOWN)) {
    Character.move('down');
    this.isMoving = true;
    this.axis  = 'y';
    this.posChange = 1;

    this.clock.startTimer(GameSettings.WALKTIME);
  }

  else if (!this.isMoving && InputManager.checkKey(GameSettings.LEFT)) {
    Character.move('left');
    this.isMoving = true;
    this.axis  = 'x';
    this.posChange = -1;

    this.clock.startTimer(GameSettings.WALKTIME);
  }

  else if (!this.isMoving && InputManager.checkKey(GameSettings.RIGHT)) {
    Character.move('right');
    this.isMoving = true;
    this.axis  = 'x';
    this.posChange = 1;

    this.clock.startTimer(GameSettings.WALKTIME);
  }

  if (this.isMoving){
    this.clock.updateTime();
    Character.continueMove(this.clock.getTime());
    Map.setChange(axis, this.clock.getTime())

    if (this.clock.isDone){
      this.isMoving = false;
      map.resetChange();
      Character.changePos(posChange, axis);
    }
  }
}

//------- Draw All Elements Of GameScreen -------\\
GameScreen.draw = function () {
  Map.draw();
  Character.draw();
}
