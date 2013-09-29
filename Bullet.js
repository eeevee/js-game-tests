var Bullet = function(x, y, rotation) {
	this.img = document.getElementById('bullet');
	this.acceleration = 6;
	this.x = x;
	this.y = y;
	this.rotation = rotation;
}