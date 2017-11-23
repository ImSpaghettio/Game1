//------- ScreenManager -------\\
// Switches between screens (titlescreen, gamescreen)

var ScreenManager = {};

// The current screen
ScreenManager.currentScreen = 'titlescreen'

//------- Initialize All Screens -------\\
ScreenManager.initialize = function () {
  TitleScreen.initialize();
  GameScreen.initialize();
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
    default:

  }

  Transition.transition();
}
