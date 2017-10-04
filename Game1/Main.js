//------- Main -------\\
window.onload = init;

//------- Initialize Game -------\\
function init () {
  // Make the canvas to draw on
  var canvas = document.createElement("canvas");

  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("position", "absolute");

  document.body.appendChild(canvas);
}
