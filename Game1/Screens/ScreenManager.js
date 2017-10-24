//------- ScreenManager -------\\
// Switches between screens (titlescreen, gamescreen)

var ScreenManager = {};

// The current screen
ScreenManager.currentScreen = 'gamescreen'

ScreenManager.initialize = function initialize() {
  GameScreen.initialize();
}

ScreenManager.update = function update() {
  switch (this.currentScreen) {
    case 'titlescreen':
      TitleScreen.update();
      break;
    case 'gamescreen':
      GameScreen.update();
      break;
    default:

  }
}

ScreenManager.draw = function draw() {
  switch (this.currentScreen) {
    case 'titlescreen':
      TitleScreen.draw();
      break;
    case 'gamescreen':
      GameScreen.draw();
      break;
    default:

  }
}
