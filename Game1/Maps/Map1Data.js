var Map1Data = {};

Map1Data.initialized = false;
Map1Data.isLoaded;
Map1Data.enemyArray = [];

Map1Data.initialize = function() {
  if (!this.initialized) {
    this.makeEnemies();
    this.makeItems();
    this.initialized = true;
  }
}

Map1Data.update = function() {
}

Map1Data.draw = function(ctx) {
  for (var i = 0; i < this.enemyArray.length; i++) {
    this.enemyArray[i].draw(ctx)
  }
}

Map1Data.makeItems = function() {
  this.gunImage = GameSettings.createImage('gun', GameSettings.GUNSRC);
  this.bulletImage = GameSettings.createImage('bullet', GameSettings.BULLETSRC)

  this.gun = new Item('Gun', 100, this.gunImage, enums.type.WEAPON);
  this.bullet = new Item('Bullet', 100, this.bulletImage, enums.type.WEAPON);
  Inventory.addItem(0,5,this.gun);
  Inventory.addItem(1,5,this.bullet);
}

Map1Data.makeEnemies = function(){
  this.enemyArray.push(new bat(10,15,1,GameSettings.createImage('bat', GameSettings.BATSRC)));
}
