var BattleScene = {};

BattleScene.projectiles = [];
BattleScene.enemyProjectiles = [];
BattleScene.animationClock;
BattleScene.enemyClock;
BattleScene.endBattle;
BattleScene.isEnemyShooting;
BattleScene.fireSound = null;

//------- Initialize Vars And Clock -------\\
BattleScene.initialize = function() {
  this.inBattle = false;
  this.animationClock = new Clock();
  this.enemyClock = new Clock();
  this.endBattle = false;
  this.isEnemyShooting = false;

  if (this.fireSound == null) {
    this.fireSound = GameSettings.createSound('fire', 'Assets/Sounds/fire.mp3');
  }
}

//------- Update The BattleScene -------\\
BattleScene.update = function() {
  if (!this.inBattle) {

    if (Transition.isMidTrans()) {
      ScreenManager.currentScreen = 'gameover';
      GameOver.win = false;
    }

    Transition.transition();
    return;
  }

  if (Character.health == 0) {
    Transition.startTransition();
    this.inBattle = false;
  }

  this.checkCollision();

  this.animationClock.updateTime();
  this.enemyClock.updateTime();

  this.isShooting = !this.animationClock.isDone;
  this.isEnemyShooting = !this.enemyClock.isDone;

  if (!this.isEnemyShooting && this.enemyProjectiles.length == 0) {
    this.enemyShoot();
    this.isEnemyShooting = true;
  }

  // Check for attacks
  this.checkActions();

  // Update map and character
  Map.update();
  Character.update();
  Transition.transition();

  if (this.enemies.length == 0 && !this.endBattle) {
      this.endBattle = true;
      Transition.startTransition();
  }

  if (Transition.isMidTrans() && this.endBattle)
  {
    ScreenManager.currentScreen = 'gamescreen';
    GameScreen.restoreFromBattle();
  }
}

//------- Draw The Battle Scene -------\\
BattleScene.draw = function() {

  // Draw the map and character
  Map.draw();
  Character.draw();

  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');

  // Draw all projectiles
  for (i = 0; i < this.projectiles.length; i++) {
    this.projectiles[i].update();
    this.projectiles[i].draw(ctx);
  }

  // Draw all projectiles
  for (i = 0; i < this.enemyProjectiles.length; i++) {
    this.enemyProjectiles[i][0].update();
    this.enemyProjectiles[i][0].draw(ctx);
  }

  // Draw all enemies
  for (i = 0; i < this.enemies.length; i++) {
    this.enemies[i].draw(ctx);
  }

  ctx.fillStyle = "black";
  ctx.font = '30px Arial';
  ctx.textAlign = 'left';
  ctx.fillText("Health: " + Character.health, 0, 30);

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

  // Get position of the top of the characters head
  this.charX = Character.xPos + (GameSettings.CHARACTERWIDTH/2);
  this.charY = Character.yPos;

  this.animationClock.startTimer(GameSettings.SHOOTINGTIME);
  this.enemyClock.startTimer(GameSettings.SHOOTINGTIME);

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

  // Start the Clock
  this.animationClock.startTimer(GameSettings.SHOOTINGTIME);

  this.isShooting = true;

  // Play the firing sound
  this.fireSound.play();

  this.angle = Math.atan2(this.cX-this.charX, this.cY-this.charY)

  this.angle *= 180/Math.PI;

  //if (this.cX < this.charX)
    //this.angle += (1/180);
  this.angle *= -1
  this.angle += 180;

  this.projectiles.push(new Bullet(this.charX, this.charY, this.angle, document.getElementById(GameSettings.BULLETID)));
}


BattleScene.checkCollision = function() {

  this.projectileDelete = [];
  this.enemyDelete = [];
  this.enemyProjDelete = [];

  for (i = 0; i < this.projectiles.length; i++) {

    for (j = 0; j < this.enemies.length; j++) {
      if (this.collides(this.enemies[j].x + this.enemies[j].offsetx + Map.mapX,
        this.enemies[j].y + this.enemies[j].offsety + Map.mapY,
        this.enemies[j].image.height * GameSettings.ITEMSCALE,
         this.enemies[j].image.width * GameSettings.ITEMSCALE,
        this.projectiles[i].x, this.projectiles[i].y,
        this.projectiles[i].image.height, this.projectiles[i].image.width)) {

          this.projectileDelete.push(i);
          this.enemies[j].health -= this.projectiles[i].damage;
          if (this.enemies[j].health == 0) {
            this.enemyDelete.push(j);
          }
        }
    }

    if (this.projectiles[i].y + this.projectiles[i].image.height < Map.mapY ||
       this.projectiles[i].x + this.projectiles[i].image.width < Map.mapX ||
       this.projectiles[i].x > GameSettings.MAPX + Map.mapX||
       this.projectiles[i].y > GameSettings.MAPY + Map.mapY) {
         this.projectileDelete.push(i);
      }
  }

  for (i = 0; i < this.enemyProjectiles.length; i++) {

    var proj = this.enemyProjectiles[i][0];

    if (this.collides( Character.xPos, Character.yPos, GameSettings.CHARACTERHEIGHT, GameSettings.CHARACTERWIDTH, proj.x, proj.y, proj.image.height, proj.image.width)) {
      this.enemyProjDelete.push(i);
      Character.health -= this.enemyProjectiles[i][1];
    }

    if (proj.y + proj.image.height < Map.mapY ||
       proj.x + proj.image.width < Map.mapX ||
       proj.x > GameSettings.MAPX + Map.mapX||
       proj.y > GameSettings.MAPY + Map.mapY)
         this.enemyProjDelete.push(i);
  }

  for (i = 0; i < this.projectileDelete.length; i++) {
    this.projectiles.splice(this.projectileDelete[i], 1);
  }

  for (i = 0; i < this.enemyDelete.length; i++) {
    this.enemies.splice(this.enemyDelete[i], 1);
  }

  for (i = 0; i < this.enemyProjDelete.length; i++) {
    this.enemyProjectiles.splice(this.enemyProjDelete[i]);
  }
}

BattleScene.collides = function(x1, y1, height1, width1, x2, y2, height2, width2) {
  if (x2 > x1 && x2 < x1 + width1) {
    if (y2 > y1 && y2 < y1 + height1)
      return true;
    if (y2 + height2 > y1 && y2 + height2 < y1 + height1)
      return true;
  }

  if (x2 + width2 > x1 && x2 + width2 < x1 + width1) {
    if (y2 > y1 && y2 < y1 + height1)
      return true;
    if (y2 + height2 > y1 && y2 + height2 < y1 + height1)
      return true;
  }

  return false;
}

// Fires a bullet from each enemy
BattleScene.enemyShoot = function () {

  // Start the Clock
  this.enemyClock.startTimer(GameSettings.SHOOTINGTIME);

  this.fireSound.play();

  for (i = 0; i < this.enemies.length; i++) {
    this.angle = Math.atan2(this.enemies[i].x + this.enemies[i].offsetx + Map.mapX -this.charX, this.enemies[i].y + Map.mapY + this.enemies[i].offsety - this.charY)

    this.angle *= 180/Math.PI;

    this.angle *= -1
    //this.angle += 180;

    this.line = [];

    this.line.push(new Bullet((this.enemies[i].x * GameSettings.TILESIZE) + this.enemies[i].offsetx + Map.mapX + 4, (this.enemies[i].y * GameSettings.TILESIZE) + this.enemies[i].offsety + Map.mapY + 4, this.angle, document.getElementById(GameSettings.BULLETID)));
    this.line.push(this.enemies[i].damage);
    this.enemyProjectiles.push(this.line);
  }
}
