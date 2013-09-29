
var canvas;
var context;
window.addEventListener("load", init);

function init(){
	canvas = document.getElementById('view');
	context = canvas.getContext('2d');
	Game.initialize(context, document.getElementById('ship'));
}