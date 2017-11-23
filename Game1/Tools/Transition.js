var Transition = {};

Transition.isTransitioning = false;
Transition.alpha;
Transition.midDon;

Transition.startTransition = function() {
  if (!this.isTransitioning) {
    this.isTransitioning = true;
    this.alpha = -1;
    this.midDone = false;
  }
}

Transition.transition = function() {
  if (!this.isTransitioning)
    return;

  this.alpha += GameSettings.TRANSITIONTIME;

  if (this.alpha > 1)
    this.alpha = 1;

  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');
  ctx.globalAlpha = 1 - Math.abs(this.alpha);
  ctx.beginPath();
  ctx.rect(0, 0, GameSettings.SCREENWIDTH, GameSettings.SCREENHEIGHT);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.globalAlpha = 1.0;

  if (this.alpha >= 1)
    this.isTransitioning = false;
}

Transition.isMidTrans = function() {
  this.midDone = this.alpha < 0 + GameSettings.TRANSITIONTIME &&
    this.alpha > 0 - GameSettings.TRANSITIONTIME && !this.midDone;

  return this.midDone;
}
