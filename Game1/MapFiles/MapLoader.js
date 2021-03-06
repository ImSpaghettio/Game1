//------- MapLoader -------\\

/*
  Initializes maps as strings then adds them to an array.
  Loads a map into a 2d array based on the map name and
  returns the array.
*/

// Namespace
var MapLoader = {};

//------- Global Maps -------\\

var Map1;

// Array of maps
var maps;

//------- Create Maps -------\\
MapLoader.initialize = function () {
  Map1 = new this.mapItem('Map1', '5,5,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0');
  Map2 = new this.mapItem('Map2',
  '22,22,1,2,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,1,2,1,2,2,2,1,1,1,2,2,2,1,3,2,2,1,2,1,2,1,2,2,1,3,1,1,2,2,1,2,2,1,2,1,1,2,2,2,1,1,1,2,2,2,1,3,2,1,1,2,3,2,1,2,2,1,2,1,2,3,2,1,2,1,3,1,1,1,1,2,3,2,1,2,1,3,1,1,1,1,2,3,2,1,2,1,3,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,2,1,2,2,1,2,1,1,2,2,3,1,1,1,2,3,2,1,2,1,2,3,2,1,2,1,3,1,1,1,1,3,2,2,1,2,2,1,2,1,1,1,2,3,2,1,2,1,3,1,1,1,2,2,1,2,1,2,1,2,2,1,3,1,1,2,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,2,1,2,2,1,2,1,1,2,2,2,1,1,2,2,2,1,3,1,2,3,2,1,2,1,3,1,1,1,1,1,2,2,1,2,2,1,2,1,1,1,1,2,2,1,2,2,1,2,1,1,2,1,1,2,3,2,1,2,2,1,2,1,2,3,2,1,2,1,3,1,1,1,1,2,3,2,1,2,1,3,1,1,1,1,1,2,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,3,2,1,2,1,3,1,1,1,2,2,3,1,1,1,2,3,2,1,2,1,1,2,2,1,2,2,1,2,1,1,1,3,2,2,1,2,2,1,2,1,1,1,2,3,2,1,2,1,3,1,1,1,2,2,1,2,1,2,1,2,2,1,3,1,1,2,2,1,2,2,1,2,1,1,3,2,1,2,1,2,1,1,1,1,1,1,1,2,2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,1,2,1,3,1,1,1');
  Map3 = new this.mapItem('Map3', '20,40,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,11,12,12,11,12,11,12,11,12,11,12,11,12,11,1,11,12,11,12,11,12,11,11,12,11,12,11,12,11,12,11,12,11,1,1,1,11,12,11,12,11,12,12,11,12,11,12,11,1,11,1,11,12,1,1,1,1,11,12,11,12,11,11,12,11,12,11,1,1,1,1,1,11,1,2,2,1,12,11,12,11,12,12,11,12,11,1,1,2,1,1,1,1,1,1,2,1,11,12,11,12,11,11,1,11,1,1,2,2,2,2,1,1,1,1,1,1,12,11,12,11,12,12,1,1,1,1,2,1,1,2,1,1,1,1,1,1,11,1,11,1,11,11,12,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,12,1,11,12,12,12,12,1,1,1,2,2,2,1,1,1,1,1,1,1,11,1,1,11,11,11,11,1,1,1,1,1,2,1,1,2,2,1,5,5,9,2,2,3,1,1,12,12,1,1,1,1,1,1,1,2,1,1,5,5,9,1,1,12,1,1,11,11,1,1,1,1,1,1,1,1,1,5,5,9,9,12,12,11,12,1,1,2,2,1,1,1,1,1,1,1,5,5,5,9,10,11,11,12,11,2,1,2,1,1,1,5,5,5,5,5,5,5,5,9,10,12,12,11,1,2,1,1,5,5,5,5,5,5,5,5,5,5,5,9,10,11,11,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,9,10,10,1,12,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,9,10,10,1,11,12,1,1,1,5,5,7,5,5,5,5,7,5,5,5,9,10,10,1,1,11,1,5,5,5,5,6,5,5,5,5,6,5,5,5,9,10,10,10,8,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,10,10,10,10,10,8,5,5,5,5,5,5,5,5,7,5,5,5,5,9,10,10,10,10,10,10,8,5,5,5,5,5,5,5,6,5,5,5,5,9,10,10,10,10,10,10,8,5,5,7,5,5,5,5,5,5,5,5,5,9,10,10,10,10,10,10,8,5,5,6,5,5,7,5,5,5,5,5,5,9,10,10,10,10,10,10,8,5,5,5,5,5,6,5,5,5,7,5,9,10,10,10,10,10,10,10,8,5,5,5,5,5,5,5,5,5,6,5,9,10,10,10,10,10,10,10,10,8,5,5,5,5,7,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,8,5,5,5,6,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,8,5,5,5,5,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,8,5,5,5,5,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,8,5,5,7,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,10,8,5,5,6,5,5,7,5,5,9,10,10,10,10,10,10,10,10,10,10,8,5,5,5,5,5,6,5,5,9,10,10,10,10,10,10,10,10,10,10,10,10,8,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,10,10,10,10,8,5,5,5,5,5,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,8,5,5,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10');
  BattleMap = new this.mapItem('BattleMap', '5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1');
  maps = [];
  maps.push(Map1);
  maps.push(Map2);
  maps.push(Map3);
  maps.push(BattleMap);
}

//------- Load Map From String -------\\
MapLoader.loadMap = function (mapName) {
  var rMap = [];
  var line = [];
  var elements = [];
  var counter = 2;

  elements = MapLoader.getMap(mapName).split(',');
  cols = elements[0];
  rows = elements[1];

  GameSettings.MAPX = cols * GameSettings.TILESIZE;
  GameSettings.MAPY = rows * GameSettings.TILESIZE;

  for (var i = 0; i < rows; i++){
    for (var j = 0; j < cols; j++){
      line.push(elements[counter])
      console.log(line);
      counter++;
    }
    rMap.push(line);
    line = [];
  }

  return rMap;
}

//------- Map Object -------\\
MapLoader.mapItem = function (name, map) {
  this.name = name;
  this.map = map;
}

//------- Return A Map String From Name -------\\
MapLoader.getMap = function (name){
  for (var i = 0; i < maps.length; i++){
    if (maps[i].name == name)
      return maps[i].map;
  }
}
