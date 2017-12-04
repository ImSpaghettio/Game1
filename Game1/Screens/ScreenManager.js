//------- ScreenManager -------\\
// Switches between screens (titlescreen, gamescreen)

var ScreenManager = {};

// The current screen
ScreenManager.currentScreen = 'titlescreen'

//------- Initialize All Screens -------\\
ScreenManager.initialize = function () {
  TitleScreen.initialize();
  GameScreen.initialize();
  BattleScene.initialize();
  GameOver.initialize();
}

//------- Update Current Screen -------\\
ScreenManager.update = function () {

  // Switch the current screen and
  // run that screens update function
  switch (this.currentScreen) {
    case 'titlescreen':
      TitleScreen.update();
      break;
    case 'gamescreen':
      GameScreen.update();
      break;
    case 'battlescene':
      BattleScene.update();
      break;
    case 'gameover':
      GameOver.update();
      break;
    default:

  }
}

//------- Draw Current Screen -------\\
ScreenManager.draw = function () {

  // Switch the current screen and
  // run that screens draw function
  switch (this.currentScreen) {
    case 'titlescreen':
      TitleScreen.draw();
      break;
    case 'gamescreen':
      GameScreen.draw();
      break;
      case 'battlescene':
        BattleScene.draw();
        break;
      case 'gameover':
        GameOver.draw();
        break;
    default:

  }

  Transition.transition();
}
