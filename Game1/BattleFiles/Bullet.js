class Bullet {
  constructor(x,y,rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.ToRadians = Math.PI/180;
  }

  update() {
    this.x += Math.cos((this.rotation - 90) * this.ToRadians) * this.speed;
  }
}
