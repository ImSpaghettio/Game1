var Text = {};

Text.initialize = function() {
  this.isShowing = false;
  this.textBoxImage = GameSettings.createImage('textbox', GameSettings.TEXTBOXSRC);
}

Text.update = function() {

}

Text.draw = function() {
  if (!this.isShowing)
    return;

  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');
  ctx.font = "20px font1";
  ctx.drawImage(this.textBoxImage, 0,GameSettings.SCREENHEIGHT- (GameSettings.SCREENHEIGHT * .3), GameSettings.SCREENWIDTH,GameSettings.SCREENHEIGHT * .3)
}

Text.show = function() {
  this.isShowing = true;
}

Text.endShow = function() {
  this.isShowing = false;
}
