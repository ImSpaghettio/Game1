var GameSettings = {}

//------- Constants -------\\
GameSettings.UPDATEINTERVAL = 5;
GameSettings.CANVASID = "gamecanvas";
GameSettings.TILESIZE = 48;
GameSettings.SCREENWIDTH;
GameSettings.SCREENHEIGHT;
GameSettings.CHARACTERHEIGHT = 60;
GameSettings.CHARACTERHEIGHTSIDE = 54;
GameSettings.CHARACTERWIDTH = 36;
GameSettings.CURRENTCHARACTERHEIGHT;
GameSettings.WALKTIME = .3;
GameSettings.SECONDANIMATION = .04;
GameSettings.THIRDANIMATION = .27;
GameSettings.INVENTORYROWS = 10;
GameSettings.INVENTORYCOLS = 5;
GameSettings.INVENTORYX = 100;
GameSettings.INVENTORYY = 100;

//------- Game Controls -------\\
GameSettings.UP = enums.keyboard.KEY_W;
GameSettings.DOWN = enums.keyboard.KEY_S;
GameSettings.LEFT = enums.keyboard.KEY_A;
GameSettings.RIGHT = enums.keyboard.KEY_D;
GameSettings.INVENTORY = enums.keyboard.KEY_E;

//------- Assets -------\\

//------- Tiles -------\\
GameSettings.WASTELANDSRC = 'Assets/Tiles/Wasteland.png';
GameSettings.GRASSSRC = 'Assets/Tiles/Grass.png';
GameSettings.ROCKSRC = 'Assets/Tiles/Rock.png';
GameSettings.FLOWERSRC = 'Assets/Tiles/Flower.png';
GameSettings.CACTUSBOTTOMSRC = 'Assets/Tiles/CactusBottom.png';
GameSettings.CACTUSTOPSRC = 'Assets/Tiles/CactusTop.png';
GameSettings.MOUNTAINSRC = 'Assets/Tiles/Mountain.png';
GameSettings.MOUNTAIN1SRC = 'Assets/Tiles/Mountain1.png';
GameSettings.MOUNTAIN2SRC = 'Assets/Tiles/Mountain2.png';
GameSettings.MOUNTAIN3SRC = 'Assets/Tiles/Mountain3.png';
GameSettings.TREE2TOPSRC = 'Assets/Tiles/Tree2 Top.png';
GameSettings.TREE2BOTTOMSRC = 'Assets/Tiles/Tree2 Bottom.png';
GameSettings.BOTTOMLEFTSMALLHOUSESRC = 'Assets/Tiles/BottomLeftSmallHouse.png';
GameSettings.BOTTOMMIDDLESMALLHOUSESRC = 'Assets/Tiles/BottomMiddleSmallHouse.png';
GameSettings.BOTTOMRIGHTSMALLHOUSESRC = 'Assets/Tiles/BottomRightSmallHouse.png';
GameSettings.MIDDLELEFTSMALLHOUSESRC = 'Assets/Tiles/MiddleLeftSmallHouse.png';
GameSettings.MIDDLERIGHTSMALLHOUSESRC = 'Assets/Tiles/MiddleRightSmallHouse.png';
GameSettings.MIDDLESMALLHOUSESRC = 'Assets/Tiles/MiddleSmallHouse.png';
GameSettings.TOPLEFTSMALLHOUSESRC = 'Assets/Tiles/TopLeftSmallHouse.png';
GameSettings.TOPMIDDLESMALLHOUSESRC = 'Assets/Tiles/TopMiddleSmallHouse.png';
GameSettings.TOPRIGHTSMALLHOUSESRC = 'Assets/Tiles/TopRightSmallHouse.png';

//------- Character Images -------\\
GameSettings.CHARACTERFRONTSRC = 'Assets/Characters/Character1Front.png';
GameSettings.CHARACTERRIGHTSRC = 'Assets/Characters/Character1Right.png';
GameSettings.CHARACTERRIGHTWALKSRC = 'Assets/Characters/Character1RightWalk.png';
GameSettings.CHARACTERBACKSRC = 'Assets/Characters/Character1Back.png';
GameSettings.CHARACTERLEFTSRC = 'Assets/Characters/Character1Left.png';
GameSettings.CHARACTERLEFTWALKSRC = 'Assets/Characters/Character1LeftWalk.png';

//------- UI -------\\
GameSettings.INVENTORYSRC = 'Assets/UI/Inventory.png';

//------- Items -------\\


//------- Tile Codes -------\\
GameSettings.WASTELANDCODE = 5;
GameSettings.GRASSCODE = 1;
GameSettings.ROCKCODE = 3;
GameSettings.FLOWERCODE = 2;
GameSettings.CACTUSBOTTOMCODE = 6;
GameSettings.CACTUSTOPCODE = 7;
GameSettings.MOUNTAINCODE = 4;
GameSettings.MOUNTAIN1CODE = 8;
GameSettings.MOUNTAIN2CODE = 9;
GameSettings.MOUNTAIN3CODE = 10;
GameSettings.TREE2TOPCODE = 12;
GameSettings.TREE2BOTTOMCODE = 11;
GameSettings.BOTTOMLEFTSMALLHOUSECODE = 19;
GameSettings.BOTTOMMIDDLESMALLHOUSECODE = 20;
GameSettings.BOTTOMRIGHTSMALLHOUSECODE = 21;
GameSettings.MIDDLELEFTSMALLHOUSECODE = 16;
GameSettings.MIDDLESMALLHOUSECODE = 17;
GameSettings.MIDDLERIGHTSMALLHOUSECODE = 18;
GameSettings.TOPLEFTSMALLHOUSECODE = 13;
GameSettings.TOPMIDDLESMALLHOUSECODE = 14;
GameSettings.TOPRIGHTSMALLHOUSECODE = 15;

//------- Image IDs -------\\
GameSettings.INVENTORYID = 'Inventory';

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
  img = document.getElementById(id).style.display = "none"
  return document.getElementById(id);
}
