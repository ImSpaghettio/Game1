var Items = {}

Items.initialize = function() {

}

class Item {
  constructor (name, durability, image, type) {
    if (this.name != 'empty') {
      this.durability = durability;
      this.image = image;
      this.type = type;
    }

    this.name = name;
  }

  draw(x, y, ctx, borderx, bordery) {
    if (this.name != 'empty') {
      ctx.drawImage(this.image, x + ((borderx/2) - (this.image.width/2) * GameSettings.ITEMSCALE), y +((bordery/2) - (this.image.height/2) * GameSettings.ITEMSCALE), this.image.width * GameSettings.ITEMSCALE, this.image.height * GameSettings.ITEMSCALE);
    }
  }

  isEmpty() {
    return this.name == 'empty';
  }
}
