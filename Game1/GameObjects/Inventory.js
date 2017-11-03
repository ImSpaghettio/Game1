var Inventory = {};

Inventory.invArray  = [];
Inventory.isShowing;

Inventory.initialize = function() {
    this.line = [];
    this.isShowing = false;
    this.image = GameSettings.createImage(GameSettings.INVENTORYID, GameSettings.INVENTORYSRC);

    for (var i = 0; i < GameSettings.INVENTORYROWS; i++) {
      for (var j = 0; j < GameSettings.INVENTORYCOLS; j++) {
        this.line.push(new Item('empty', 0, 0));
      }
      this.invArray.push(this.line);
      this.line = [];
    }
}

Inventory.draw = function() {
  if (this.isShowing){
    canvas = document.getElementById(GameSettings.CANVASID);
    ctx = canvas.getContext('2d');
    ctx.drawImage(this.image, GameSettings.INVENTORYX, GameSettings.INVENTORYY);

    for (var i = 0; i < GameSettings.INVENTORYROWS; i++) {
      for (var j = 0; j < GameSettings.INVENTORYCOLS; j++) {
        this.invArray[i][j].draw(i * 50 + 32, j*50 + 2)
      }
    }
  }
}

Inventory.addItem = function(x,y, item) {
  if (this.Inventory.invArray[x][y].name == 'empty') {
    this.Inventory.invArray[x][y] = item;
  }
}

class Item {
  constructor (name, durability, image) {
    if (name != 'empty') {
      this.durability = durability;
      this.image = image;
    }

    this.name = name;
  }

  draw(x, y, ctx) {
    if (name != 'empty') {
      ctx.drawImage(this.image, x, y);
    }
  }
}
