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
    this.currentMap = MapLoader.loadMap('Map1');

     // If it was loaded set loaded to true
    if(this.currentMap != null)
      this.isMapLoaded = true;
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
      ctx.drawImage(document.getElementById(this.tileArray[this.currentMap[j][i]]),i*GameSettings.TILESIZE + this.mapX,
       j*GameSettings.TILESIZE + this.mapY, GameSettings.TILESIZE, GameSettings.TILESIZE);
    }
  }
}

//------- Loads All Tiles -------\\
Map.getTiles = function () {
  this.tileArray = [];
  var tmp = GameSettings.createImage("wasteland", GameSettings.WASTELANDSRC)
  this.tileArray.push(tmp.id);
  GameSettings.WASTELANDCODE = this.tileArray.length;
  tmp = GameSettings.createImage("grass", GameSettings.GRASSSRC)
  this.tileArray.push(tmp.id);
  GameSettings.GRASSCODE = this.tileArray.length;
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
