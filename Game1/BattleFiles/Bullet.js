class Bullet {
  constructor(x,y,rotation, image) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.speed = 2;
    this.image = image;
    this.damage = 2;
  }

  update() {
    this.x += Math.cos((this.rotation-90) * GameSettings.TORADIANS) * this.speed;
		this.y += Math.sin((this.rotation-90) * GameSettings.TORADIANS) * this.speed;
  }

  draw(ctx) {
    ctx.save();
		ctx.translate(this.x , this.y );
		ctx.rotate(this.rotation * GameSettings.TORADIANS);
		ctx.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
		ctx.restore();
  }
}
