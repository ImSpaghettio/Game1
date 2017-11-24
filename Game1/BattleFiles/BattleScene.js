var BattleScene = {};

BattleScene.projectiles = [];
BattleScene.animationClock;

//------- Initialize Vars And Clock -------\\
BattleScene.initialize = function() {
  this.inBattle = false;
  this.animationClock = new clock();
}

//------- Update The BattleScene -------\\
BattleScene.update = function() {
  if (!this.inBattle)
    return;

  Map.update();
  Character.update();
  Transition.transition();
  this.isShooting = this.animationClock.isDone;
}

//------- Draw The Battle Scene -------\\
BattleScene.draw = function() {

  Map.draw();
  Character.draw();

  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');

  for (i = 0; i < this.enemies.length; i++) {
    this.enemies[i].draw(ctx);
  }

}

//------- Load The Battle Map And Enemies -------\\
BattleScene.loadScene = function(enemy) {
  // Make an array of enemies
  this.enemies = [];

  // Load the map and character
  Map.isMapLoaded = false;
  Map.mapFile = 'BattleMap';
  Character.posOnMapX = 2;
  Character.posOnMapY = 4;
  Character.face('up');
  this.inBattle = true;

  // Get the top of the characters head
  this.charX = Character.xPos + (GameSettings.CHARACTERWIDTH/2);
  this.charY = Character.yPos;

  for (i = 0; i < enemy.num; i++) {
    this.enemies.push(new bat(i,0,1,enemy.image));
  }
}

BattleScene.checkBulletCollision = function() {

}

//------- Check For Shooting -------\\
BattleScene.checkActions = function() {

  // If shooting animation is done and
  // there is a click then continue
  if (!InputManager.checkClick() || this.isShooting)
    return;

  // Set the x and y positions of the mouse
  this.cX = InputManager.mouseX;
  this.cY = InputManager.mouseY;

  this.isShooting = true;
  this.projectiles.push(new Bullet())
}
