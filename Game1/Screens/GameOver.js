var GameOver = {};

GameOver.win;

GameOver.initialize = function() {

}

GameOver.update = function() {
  if (InputManager.checkKey(GameSettings.NEXT))
    document.location.reload(true);
}

GameOver.draw = function() {
  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.rect(0, 0, GameSettings.SCREENWIDTH, GameSettings.SCREENHEIGHT);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font="30px Impact";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  // Draw text in middle of screen
  if (this.win)
    ctx.fillText("You Won!" , 0+(GameSettings.SCREENWIDTH/2),0+(GameSettings.SCREENHEIGHT/2));
  else ctx.fillText("GAME OVER" , 0+(GameSettings.SCREENWIDTH/2),0+(GameSettings.SCREENHEIGHT/2));

  ctx.font="20px Arial";
  ctx.fillText("Press space to play again" , (GameSettings.SCREENWIDTH/2),(GameSettings.SCREENHEIGHT - 20));

  Transition.transition();
}
