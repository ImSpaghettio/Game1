var GameSettings = {}

//------- Constants -------\\
GameSettings.UPDATEINTERVAL = 10;
GameSettings.CANVASID = "gamecanvas";
GameSettings.TILESIZE = 48;
GameSettings.SCREENWIDTH;
GameSettings.SCREENHEIGHT;
GameSettings.CHARACTERHEIGHT = 60;
GameSettings.CHARACTERHEIGHTSIDE = 54;
GameSettings.CHARACTERWIDTH = 36;
GameSettings.CURRENTCHARACTERHEIGHT;
GameSettings.WALKTIME = 1;
GameSettings.SECONDANIMATION = .2;
GameSettings.THIRDANIMATION = .8;

//------- Game Controls -------\\
GameSettings.UP = enums.keyboard.KEY_W;
GameSettings.DOWN = enums.keyboard.KEY_S;
GameSettings.LEFT = enums.keyboard.KEY_A;
GameSettings.RIGHT = enums.keyboard.KEY_D;

//------- Assets -------\\
GameSettings.WASTELANDSRC = 'Assets/Tiles/Wasteland.png';
GameSettings.GRASSSRC = 'Assets/Tiles/Grass.png';
GameSettings.ROCKSRC;
GameSettings.CHARCTERFRONTSRC = 'Assets/Characters/Character1Front.png';
GameSettings.CHARACTERRIGHTSRC = 'Assets/Characters/Character1Right.png';
GameSettings.CHARACTERRIGHTWALKSRC = 'Assets/Characters/Character1RightWalk.png';
GameSettings.CHARACTERBACKSRC = 'Assets/Characters/Character1Back.png';
GameSettings.CHARACTERLEFTSRC = 'Assets/Characters/Character1Left.png';
GameSettings.CHARACTERLEFTWALKSRC = 'Assets/Characters/Character1LeftWalk.png';


//------- Tile Codes -------\\
GameSettings.WASTELANDCODE;
GameSettings.GRASSCODE;
GameSettings.ROCK;

//------- Character Codes -------\\
GameSettings.CHARACTERFRONTCODE;
GameSettings.CHARACTERBACKCODE;
GameSettings.CHARACTERLEFTCODE;
GameSettings.CHARACTERLEFTWALKCODE;
GameSettings.CHARACTERRIGHTCODE;
GameSettings.CHARACTERRIGHTWALKCODE;

//------- Functions -------\\

//------- Creates Image With Id And Src -------\\
GameSettings.createImage = function (id, src) {
  var img = document.createElement("IMG");

  img.setAttribute("id", id);
  img.setAttribute("src", src);

  document.body.appendChild(img);

  return document.getElementById(id);
}
