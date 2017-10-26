var Character = {}

// Stores character ids
Character.characterArray = [];
Character.xPos;
Character.yPos;
Character.currentImage = 0;

//------- Character Animation -------\\
Character.isMoving

Character.initialize = function () {
  this.characterArray.length = 0;
  this.loadCharacter();

  this.xPos = GameSettings.SCREENWIDTH/2 - GameSettings.CHARACTERWIDTH/2;
  this.yPos = GameSettings.SCREENHEIGHT/2 - GameSettings.CHARACTERHEIGHT/2;

  this.posOnMapX = 0;
  this.posOnMapY = 0;
}

Character.update = function () {
  if (isNaN(this.xPos))
    this.resize();
  if (isNaN(this.yPos))
    this.resize();
}

Character.resize = function () {
  this.yPos = GameSettings.SCREENHEIGHT/2 - GameSettings.CHARACTERHEIGHT/2;
  this.xPos = GameSettings.SCREENWIDTH/2 - GameSettings.CHARACTERWIDTH/2;
}

Character.draw = function () {
  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(this.characterArray[this.currentImage], this.xPos, this.yPos, GameSettings.CHARACTERWIDTH, GameSettings.CHARACTERHEIGHT);
}

Character.loadCharacter = function () {
  GameSettings.CHARACTERFRONTCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterFront', GameSettings.CHARCTERFRONTSRC));
  GameSettings.CHARACTERBACKCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterBack', GameSettings.CHARACTERBACKSRC));
  GameSettings.CHARACTERLEFTCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterLeft', GameSettings. CHARACTERLEFTSRC));
  GameSettings.CHARACTERLEFTWALKCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterLeftWalk', GameSettings.CHARACTERLEFTWALKSRC));
  GameSettings.CHARACTERRIGHTCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterRight', GameSettings.CHARACTERRIGHTSRC));
  GameSettings.CHARACTERRIGHTWALKCODE = this.characterArray.length;
  this.characterArray.push(GameSettings.createImage('CharacterRightWalk', GameSettings. CHARACTERRIGHTWALKSRC));

  this.characterArray[0].style.height = 60;
  this.characterArray[0].style.width = 36;
}

//------- Starts The Move Animation -------\\
Character.move = function (direction) {
  Direction = direction;

// Set the current character image to front back left right based
// on the direction they are moving
  switch (direction) {
    case 'up':
      this.currentImage = GameSettings.CHARACTERBACKCODE;
      break;
    case 'down':
      this.currentImage = GameSettings.CHARACTERFRONTCODE;
      break;
    case 'left':
      this.currentImage = GameSettings.CHARACTERLEFTCODE;
      break;
    case 'right':
      this.currentImage = GameSettings.CHARACTERRIGHTCODE;
      break;
    default:

  }

//------- Continue The Move Animation
  Character.continueMove = function(time) {

    currentTime = time/ GameSettings.WALKTIME;
    // Check which direction and change images
    // based on it. Change image based on how Far
    // into the animation we are.
    switch (this.Direction) {
      case 'up':
      // Add forward animation
        break;
      case 'down':
      // Add backwards animation
        break;
      case 'left':
      if (currentTime > GameSettings.THIRDANIMATION)
        this.currentImage = GameSettings.CHARACTERLEFTCODE;
      else if (currentTime > GameSettings.SECONDANIMATION)
        this.currentImage = GameSettings.CHARACTERLEFTWALKCODE;
        break;
      case 'right':
      if (currentTime > GameSettings.THIRDANIMATION)
        this.currentImage = GameSettings.CHARACTERRIGHTCODE;
      else if (currentTime > GameSettings.SECONDANIMATION)
        this.currentImage = GameSettings.CHARACTERRIGHTWALKCODE;
        break;
      default:
    }
  }

  Character.posChange = function (posChange, axis) {
    if (axis == 'x')
      posOnMapX += posChange;

    if (axis == 'y')
      posOnMapY += posChange;
  }
}
