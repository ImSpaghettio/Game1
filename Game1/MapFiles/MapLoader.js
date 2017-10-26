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
  maps = [];
  maps.push(Map1);
}

//------- Load Map From String -------\\
MapLoader.loadMap = function (mapName) {
  var rMap = [];
  var line = [];
  var elements = [];
  var counter = 2;

  elements = MapLoader.getMap(mapName).split(',');
  rows = elements[0];
  cols = elements[1];

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
