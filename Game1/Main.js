//------- Main -------\\

/*
  Contains all the main processes for the
  game and the canvas.
*/

//------- Event handlers-------\\
window.onload = init;

window.addEventListener("resize", resize);

//------- Initialize Game -------\\
function init () {
  // Make the canvas to draw on
  var canvas = document.createElement("canvas");

  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("id", GameSettings.CANVASID);
  canvas.setAttribute("position", "absolute");

  document.body.appendChild(canvas);

  ScreenManager.initialize();

  // Set the update interval
  setInterval(mainloop, GameSettings.UPDATEINTERVAL);
}

//------- The game loop -------\\
function  mainloop() {
  // update and draw the screenmanager every cycle
  ScreenManager.update();
  ScreenManager.draw();
}

//------- Called on resize -------\\
function resize () {
  // Resizes the canvas to fit the screen
  document.getElementById("gamecanvas").width = window.innerWidth;
  document.getElementById("gamecanvas").height = window.innerHeight;
}
