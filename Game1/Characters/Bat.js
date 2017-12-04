var Bat = {};

class bat {
  constructor(x,y, num, image) {
    this.x = x;
    this.y = y;
    this.num = num;
    this.image = image;
    this.health = 10;
    this.damage = 5;
  }

  draw(ctx){
    this.offsetx = ((GameSettings.TILESIZE/2) - (this.image.width*GameSettings.ITEMSCALE)/2);
    this.offsety = ((GameSettings.TILESIZE/2) - (this.image.height*GameSettings.ITEMSCALE)/2);
    ctx.drawImage(this.image, Map.mapX + (GameSettings.TILESIZE*this.x) + this.offsetx, Map.mapY + (GameSettings.TILESIZE*this.y) + this.offsety, this.image.width * GameSettings.ITEMSCALE, this.image.height * GameSettings.ITEMSCALE);
  }
}
