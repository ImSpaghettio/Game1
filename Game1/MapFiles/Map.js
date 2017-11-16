var Map = {}

var tileArray

Map.xChange;
Map.yChange;

Map.initialize = function () {
  this.isMapLoaded = false;
  MapLoader.initialize();
  this.mapArray = [
    "Map1", "Map2"
  ];
  Map1Data.initialize();

  this.currentMap = null;
  this.currentMapSource = 'Map1.csv';
  this.getTiles();
  this.mapX = 0;
  this.mapY = 0;
  this.xChange = 0;
  this.yChange = 0;
}

Map.update = function () {
  if (!this.isMapLoaded) {

    // Set map to null and load new map
    this.currentMap = null;
    this.currentMap = MapLoader.loadMap('Map3');

     // If it was loaded set loaded to true
    if(this.currentMap != null)
      this.isMapLoaded = true;
      Map1Data.makeItems();
  }

  //------- Place the map relative to the character -------\\
  this.mapX = GameSettings.SCREENWIDTH/2 - (GameSettings.TILESIZE/2) - (GameSettings.TILESIZE * Character.posOnMapX) + this.xChange;
  this.mapY = (GameSettings.SCREENHEIGHT/2 - GameSettings.TILESIZE) + (GameSettings.CHARACTERHEIGHT/2) - (GameSettings.TILESIZE * Character.posOnMapY) + this.yChange;
}

Map.draw = function () {
  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, GameSettings.SCREENWIDTH, GameSettings.SCREENHEIGHT);
  if (this.isMapLoaded) {
    this.drawMap(ctx);
  }
}

//------- Draw The Map From Array -------\\
Map.drawMap = function (ctx) {
  for (var i = 0; i < this.currentMap.length; i++) {
    for (var j = 0; j < this.currentMap[i].length; j++) {
      if (this.currentMap[i][j] != 0){
        ctx.drawImage(document.getElementById(this.tileArray[this.currentMap[i][j]]),j*GameSettings.TILESIZE + this.mapX,
          i*GameSettings.TILESIZE + this.mapY, GameSettings.TILESIZE, GameSettings.TILESIZE);
     }
    }
  }
}

//------- Loads All Tiles -------\\
Map.getTiles = function () {
  this.tileArray = [];
  this.solidTiles = [];

  this.tileArray[GameSettings.GRASSCODE] = (GameSettings.createImage("grass", GameSettings.GRASSSRC).id);
  this.tileArray[GameSettings.WASTELANDCODE] = (GameSettings.createImage("wasteland", GameSettings.WASTELANDSRC).id);
  this.tileArray[GameSettings.FLOWERCODE] = (GameSettings.createImage("flower", GameSettings.FLOWERSRC).id);
  this.tileArray[GameSettings.ROCKCODE] = (GameSettings.createImage("rock", GameSettings.ROCKSRC).id);
  this.tileArray[GameSettings.CACTUSBOTTOMCODE] = (GameSettings.createImage("cactusbottom", GameSettings.CACTUSBOTTOMSRC).id);
  this.tileArray[GameSettings.CACTUSTOPCODE] = (GameSettings.createImage("cactustop", GameSettings.CACTUSTOPSRC).id);
  this.tileArray[GameSettings.TREE2TOPCODE] = (GameSettings.createImage("tree2top", GameSettings.TREE2TOPSRC).id);
  this.tileArray[GameSettings.TREE2BOTTOMCODE] = (GameSettings.createImage("tree2bottom", GameSettings.TREE2BOTTOMSRC).id);
  this.tileArray[GameSettings.MOUNTAINCODE] = (GameSettings.createImage("mountain", GameSettings.MOUNTAINSRC).id);
  this.tileArray[GameSettings.MOUNTAIN1CODE] = (GameSettings.createImage("mountain1", GameSettings.MOUNTAIN1SRC).id);
  this.tileArray[GameSettings.MOUNTAIN2CODE] = (GameSettings.createImage("mountain2", GameSettings.MOUNTAIN2SRC).id);
  this.tileArray[GameSettings.MOUNTAIN3CODE] = (GameSettings.createImage("mountain3", GameSettings.MOUNTAIN3SRC).id);
  this.tileArray[GameSettings.BOTTOMLEFTSMALLHOUSECODE] = (GameSettings.createImage("bottomleftsmallhouse", GameSettings.BOTTOMLEFTSMALLHOUSESRC).id);
  this.tileArray[GameSettings.BOTTOMMIDDLESMALLHOUSECODE] = (GameSettings.createImage("bottommiddlesmallhouse", GameSettings.BOTTOMMIDDLESMALLHOUSESRC).id);
  this.tileArray[GameSettings.BOTTOMRIGHTSMALLHOUSECODE] = (GameSettings.createImage("bottomrightsmallhouse", GameSettings.BOTTOMRIGHTSMALLHOUSESRC).id);
  this.tileArray[GameSettings.MIDDLELEFTSMALLHOUSECODE] = (GameSettings.createImage("middleleftsmallhouse", GameSettings.MIDDLELEFTSMALLHOUSESRC).id);
  this.tileArray[GameSettings.MIDDLESMALLHOUSECODE] = (GameSettings.createImage("middlesmallhouse", GameSettings.MIDDLESMALLHOUSESRC).id);
  this.tileArray[GameSettings.MIDDLERIGHTSMALLHOUSECODE] = (GameSettings.createImage("middlerightsmallhouse", GameSettings.MIDDLERIGHTSMALLHOUSESRC).id);
  this.tileArray[GameSettings.TOPLEFTSMALLHOUSECODE] = (GameSettings.createImage("toprightsmallhouse", GameSettings.TOPLEFTSMALLHOUSESRC).id);
  this.tileArray[GameSettings.TOPMIDDLESMALLHOUSECODE] = (GameSettings.createImage("topmiddlesmallhouse", GameSettings.TOPMIDDLESMALLHOUSESRC).id);
  this.tileArray[GameSettings.TOPRIGHTSMALLHOUSECODE] = (GameSettings.createImage("toprightsmallhouse", GameSettings.TOPRIGHTSMALLHOUSESRC).id);

  // Add all solid blocks to the array for collision
  this.solidTiles.push(GameSettings.CACTUSBOTTOMCODE);
  this.solidTiles.push(GameSettings.CACTUSTOPCODE);
  this.solidTiles.push(GameSettings.TREE2TOPCODE);
  this.solidTiles.push(GameSettings.TREE2BOTTOMCODE);
  this.solidTiles.push(GameSettings.MOUNTAINCODE);
  this.solidTiles.push(GameSettings.MOUNTAIN1CODE);
  this.solidTiles.push(GameSettings.MOUNTAIN2CODE);
  this.solidTiles.push(GameSettings.MOUNTAIN3CODE);
  this.solidTiles.push(GameSettings.BOTTOMRIGHTSMALLHOUSECODE);
  this.solidTiles.push(GameSettings.BOTTOMLEFTSMALLHOUSECODE);
  this.solidTiles.push(GameSettings.BOTTOMMIDDLESMALLHOUSECODE);
  this.solidTiles.push(GameSettings.MIDDLELEFTSMALLHOUSECODE);
  this.solidTiles.push(GameSettings.MIDDLESMALLHOUSECODE);
  this.solidTiles.push(GameSettings.MIDDLERIGHTSMALLHOUSECODE);
  this.solidTiles.push(GameSettings.TOPLEFTSMALLHOUSECODE);
  this.solidTiles.push(GameSettings.TOPMIDDLESMALLHOUSECODE);
  this.solidTiles.push(GameSettings.TOPRIGHTSMALLHOUSECODE);
}

Map.setChange = function(direction, time, posChange) {
  switch (direction) {
    case 'x':
      this.xChange = posChange* (time/GameSettings.WALKTIME * GameSettings.TILESIZE);
      break;
    case 'y':
      this.yChange = posChange * (time/GameSettings.WALKTIME * GameSettings.TILESIZE);
      break;
    default:

  }
}

Map.resetChange = function() {
  this.xChange = 0;
  this.yChange = 0;
}

//------- Checks If The Player Will Hit A Solid -------\\
Map.checkLimits = function(xPos, yPos, direction) {
  switch (direction) {
    case 'up':
      if (this.isSolid(this.currentMap[yPos-1][xPos]))
        return false;
      return true;
      break;
    case 'down':
    if (this.isSolid(this.currentMap[yPos+1][xPos]))
      return false;
    return true;
      break;
    case 'left':
      if (this.isSolid(this.currentMap[yPos][xPos-1]))
        return false;
      return true;
      break;
    case 'right':
      if (this.isSolid(this.currentMap[yPos][xPos+1]))
        return false;
        return true;
      break;
  }
}

//------- Checks If A Certain Tile Is Solid -------\\
Map.isSolid = function(code) {
  for(i = 0; i < this.solidTiles.length; i++) {
    if (this.solidTiles[i] == code)
      return true;
  }

  return false;
}
