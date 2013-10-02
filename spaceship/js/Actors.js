var Actors = {

	BasicActor: function(img) {
		console.log('basic actor');
		this.img = img;
		this.x = 0;
		this.y = 0;
		this.rotation = 0;
		this.acceleration = 1;
	},

	Ship: function(img) {
		Actors.BasicActor.call(this, img);

		this.updatePosition = function() {
			if(Keyboard.pressedKeys['left']) {
				this.rotation -= 5;
			}

			if(Keyboard.pressedKeys['right']) {
				this.rotation += 5;
			}

			if(Keyboard.pressedKeys['up']) {
				this.increaseAcceleration();
			}

			if(Keyboard.pressedKeys['down']) {
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
			return new Actors.Bullet(this.x, this.y, this.rotation);
		}
	},

	Bullet: function(x, y, rotation) {
		Actors.BasicActor.call(this, document.getElementById('bullet'));
		this.x = x;
		this.y = y;
		this.rotation = rotation;
		this.acceleration = 6;
	}
}

