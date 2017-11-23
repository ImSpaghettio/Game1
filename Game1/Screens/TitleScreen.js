var TitleScreen = {};

TitleScreen.instructionsArr = [];
TitleScreen.currentInstruction;

TitleScreen.initialize = function() {
  this.loadInstructions()
  this.currentInstruction = this.instructionsArr.pop();
}

TitleScreen.update = function () {
  // start the transition if the next key was pressed
  if (InputManager.checkKey(GameSettings.NEXT) && !InputManager.checkLastKey(GameSettings.NEXT)) {
    Transition.startTransition();
  }

  // If it is in the middle of the transition
  if (Transition.isMidTrans()) {
    // If there are no more instructions, switch to gamescreen
    if (this.instructionsArr.length == 0)
      ScreenManager.currentScreen = 'gamescreen';
    // do next instruction
    this.currentInstruction = this.instructionsArr.pop();
  }
}

TitleScreen.draw = function () {
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
  ctx.fillText(this.currentInstruction , 0+(GameSettings.SCREENWIDTH/2),0+(GameSettings.SCREENHEIGHT/2));
}

TitleScreen.loadInstructions = function() {
  this.instructionsArr.push("Use the E Key to open your inventory");
  this.instructionsArr.push("Use W A S D keys to move");
}
