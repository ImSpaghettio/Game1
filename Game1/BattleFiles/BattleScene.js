var BattleScene = {};

BattleScene.initialize = function() {
  this.inBattle = false;
}

BattleScene.update = function() {
  if (!this.inBattle)
    return;
}

BattleScene.draw = function() {

}

BattleScene.loadScene = function() {
  Map.isMapLoaded = false;
  Map.currentMap = 'BattleMap';
}
