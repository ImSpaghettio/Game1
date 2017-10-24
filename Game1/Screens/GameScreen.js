var GameScreen = {}

var tileArray

GameScreen.initialize = function initialize() {
  this.isMapLoaded = false;
  MapLoader.initialize();
  this.mapArray = [
    "Map1.csv", "Map2.csv"
  ];

  this.currentMap = null;
  this.currentMapSource = 'Map1.csv';
  this.getTiles();
}

GameScreen.update = function update() {
  if (!this.isMapLoaded) {

    // Set map to null and load new map
    this.currentMap = null;
    this.currentMap = MapLoader.loadMap('Map1');

     // If it was loaded set loaded to true
    if(this.currentMap != null)
      this.isMapLoaded = true;
  }
}

GameScreen.draw = function draw() {
  canvas = document.getElementById(GameSettings.CANVASID);
  ctx = canvas.getContext('2d');
  if (this.isMapLoaded) {
    this.drawMap(ctx);
  }
}

GameScreen.drawMap = function drawMap(ctx) {
  for (var i = 0; i < this.currentMap.length; i++) {
    for (var j = 0; j < this.currentMap[i].length; j++) {
      ctx.drawImage(this.tileArray[this.currentMap[i][j]],i*GameSettings.TILESIZE, j*GameSettings.TILESIZE);
    }
  }
}

GameScreen.getTiles = function getTiles () {
  this.tileArray = [];
  this.tileArray.push(this.createImage("wasteland", "Assets/Wasteland.png"));
  GameSettings.WASTELANDCODE = this.tileArray.length;
  this.tileArray.push(this.createImage("grass", "Assets/Grass.png"));
  GameSettings.GRASSCODE = this.tileArray.length;
}

GameScreen.createImage = function createImage(id, src) {
  var img = document.createElement("IMG");

  img.setAttribute("id", id);
  img.setAttribute("src", src);

  document.body.appendChild(img);
  return document.getElementById(id);
}
