var GameScreen = {}

GameScreen.clock = new Clock();

//------- Initialize All Elements Of GameScreen -------\\
GameScreen.initialize = function () {
  Inventory.initialize();
  Map.initialize();
  Character.initialize();
  Text.initialize();
  var isMoving = false, axis, posChange;
  this.currentDirection = 'down';
  this.gameEnd = false;
}

//------- Update All Elements Of GameScreen -------\\
GameScreen.update = function () {

  if (Map.isMapLoaded && Map.enemies.length == 0) {
    this.gameEnd = true;
    Transition.startTransition();
  }

  if (this.gameEnd && Transition.isMidTrans()) {
    ScreenManager.currentScreen = 'gameover';
    GameOver.win = true;
  }

  Map.update();
  Character.update();
  this.checkMovement();
  this.checkInventory();

  // Check if a battle has started
  if (Map.checkBattleScene(Character.posOnMapY, Character.posOnMapX, this.currentDirection) && !Inventory.invArray[0][5].isEmpty() && !Inventory.invArray[1][5].isEmpty())
  {
    Transition.startTransition();
    BattleScene.inBattle = true;
  }

  // If a battle has started change screens in the middle of the transition
  if (BattleScene.inBattle && Transition.isMidTrans())
  {
    // Save all character and map information
    GameSettings.CURRENTMAP = Map.mapFile;
    GameSettings.CURRENTMAPX = Character.posOnMapX;
    GameSettings.CURRENTMAPY =  Character.posOnMapY;
    GameSettings.CURRENTFACECODE = Character.currentImage;

    // Switch the screen and delete the enemy
    ScreenManager.currentScreen = 'battlescene';
    BattleScene.initialize();
    BattleScene.loadScene(Map.enemies[Map.currentEnemy]);
  }
}

//------- Draw All Elements Of GameScreen -------\\
GameScreen.draw = function () {
  Map.draw();
  Character.draw();
  Inventory.draw();
  Text.draw();
}

//------- Restores Map and Character Positions After a Battle -------\\
GameScreen.restoreFromBattle = function() {

  Map.mapFile = GameSettings.CURRENTMAP;
  Character.posOnMapX = GameSettings.CURRENTMAPX;
  Character.posOnMapY = GameSettings.CURRENTMAPY;
  Character.currentImage = GameSettings.CURRENTFACECODE;

  Map.enemies.splice(Map.currentEnemy, 1);

  Map.isMapLoaded = false;
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
    this.currentDirection = 'up';

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
    this.currentDirection = 'down';

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
    this.currentDirection = 'left';
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
    this.currentDirection = 'right';

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

  if (InputManager.checkClick())
    Inventory.checkSwitch();
}
