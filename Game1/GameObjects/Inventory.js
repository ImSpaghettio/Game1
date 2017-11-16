var Inventory = {};

Inventory.invArray  = [];
Inventory.isShowing;
Inventory.hand;

// Create the inventory
Inventory.initialize = function() {
    this.line = [];
    this.isShowing = false;
    this.weaponSlotDone = 0;
    this.image = GameSettings.createImage(GameSettings.INVENTORYID, GameSettings.INVENTORYSRC);

    // Fill the inventory with empty slots
    for (var i = 0; i < GameSettings.INVENTORYROWS; i++) {
      for (var j = 0; j < GameSettings.INVENTORYCOLS; j++) {
        this.line.push(new Item('empty', 0, 0));
      }
      if (this.weaponSlotDone < GameSettings.NUMWEAPONSLOTS) {
        this.line.push(new Item('empty', 0, 0));
        this.weaponSlotDone++;
      }
      this.invArray.push(this.line);
      this.line = [];
    }

    this.hand = new Item('empty', 0, 0);
}

Inventory.draw = function() {
  if (this.isShowing){
    canvas = document.getElementById(GameSettings.CANVASID);
    ctx = canvas.getContext('2d');
    this.weaponSlotDrawn = 0;
    this.i = 0;
    this.j = 0;
    // Draw the inventory
    ctx.drawImage(this.image, GameSettings.INVENTORYX, GameSettings.INVENTORYY);

    // Draw each item in the inventory
    for (this.i = 0; this.i < GameSettings.INVENTORYROWS; this.i++) {
      for (this.j = 0; this.j < GameSettings.INVENTORYCOLS; this.j++) {
        this.invArray[this.i][this.j].draw((this.i * GameSettings.SLOTSIZE) + GameSettings.FIRSTSLOTX + GameSettings.INVENTORYX, (this.j*GameSettings.SLOTSIZE) + GameSettings.FIRSTSLOTY + GameSettings.INVENTORYY, ctx)
      }
      if (this.weaponSlotDrawn < GameSettings.NUMWEAPONSLOTS) {
        this.invArray[this.i][this.j].draw((this.i * GameSettings.SLOTSIZE) + GameSettings.FIRSTSLOTX + GameSettings.INVENTORYX, (this.j*GameSettings.SLOTSIZE) + GameSettings.FIRSTSLOTY + GameSettings.INVENTORYY, ctx)
        this.weaponSlotDrawn++;
      }
    }
  }
}

Inventory.checkSwitch = function() {
  for (var i = 0; i < GameSettings.INVENTORYROWS; i++) {
    for (var j = 0; j < GameSettings.INVENTORYCOLS; j++) {
      this.invArray[i][j].draw(i * 50 + 32, j*50 + 2)
    }
    if (this.weaponSlotDrawn < GameSettings.NUMWEAPONSLOTS) {
      this.invArray[i][j].draw(i * 50 + 32, j*50 + 2)
      this.weaponSlotDone++;
    }
  }
}

Inventory.addItem = function(x,y,item) {
  this.invArray[x][y] = item;
}

// Swaps the item in the hand with the slot in the inventory
Inventory.switchItem = function(x,y) {
  var tmp = this.hand;
  this.hand = this.Inventory.invArray[x][y]
  this.Inventory.invArray[x][y] = tmp;
}
