//------- MapLoader -------\\

/*
  Loads a map from a file and returns a the 2d array (array of anarray)

  loadMap is given the id of a csv file and prepares it to be read

  getMap returns the map csv as a 2d array if id is done being read, if
  not it returns null
*/

var MapLoader = {};

// Map to be returned
var MapLoaderLoadedMap;
var Map1;
var maps;

MapLoader.initialize = function initialize() {
  Map1 = new this.mapItem('Map1', '5,5,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0');
  maps = [];
  maps.push(Map1);
}

MapLoader.loadMap = function loadMap(mapName) {
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

MapLoader.mapItem = function map(name, map) {
  this.name = name;
  this.map = map;
}

MapLoader.getMap = function getMap(name){
  for (var i = 0; i < maps.length; i++){
    if (maps[i].name == name)
      return maps[i].map;
  }
}
