var Map1Data = {};

Map1Data.initialized = false;
Map1Data.isLoaded;

Map1Data.initialize = function() {
  if (!this.initialized) {

    this.initialized = true;
  }
}

Map1Data.makeItems = function() {
  this.gunImage = GameSettings.createImage('gun', GameSettings.GUNSRC);

  this.gun = new Item('Gun', 100, this.gunImage, enums.type.WEAPON);
  Inventory.addItem(5,0,this.gun);
}
