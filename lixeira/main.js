
var canvas;
var context;
window.addEventListener("load", init);

function init(){
	canvas = document.getElementById('view');
	context = canvas.getContext('2d');
	Game.initialize(context, document.getElementById('ship'));
	var ship = Actors.Ship('img');
}

function Teste() {
	this.ok = 'ok';
}

function Teste2() {
	Teste.call(this);
	Teste2.prototype = new Teste();
	Teste2.prototype.constructor = Teste2;
	this.ok2 = 'ok2';
}
/*
var t = new Teste2();
console.log(t.ok);
console.log(t.ok2);*/