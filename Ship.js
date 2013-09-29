var Ship = function(img) {
	this.img = img;
	this.rotation = 0;
	this.x = 0;
	this.y = 0;
	this.acceleration = .5;

	this.updatePosition = function() {
		if(pressedKeys['left']) {
			this.rotation -= 5;
		}

		if(pressedKeys['right']) {
			this.rotation += 5;
		}

		if(pressedKeys['up']) {
			this.increaseAcceleration();
		}

		if(pressedKeys['down']) {
			this.decreaseAcceleration();
		}
	}

	this.increaseAcceleration = function() {
		if(this.acceleration < 4) {
			this.acceleration += .1;
		}
	}

	this.decreaseAcceleration = function() {
		if(this.acceleration > -4) {
			this.acceleration -= .1;
		}
	}

	this.shot = function() {
		return new Bullet(this.x, this.y, this.rotation);
	}
}