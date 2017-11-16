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

  draw(x, y, ctx) {
    if (this.name != 'empty') {
      ctx.drawImage(this.image, x, y, this.image.width * GameSettings.ITEMSCALE, this.image.height * GameSettings.ITEMSCALE);
    }
  }

  isEmpty() {
    return this.name == 'empty';
  }
}
