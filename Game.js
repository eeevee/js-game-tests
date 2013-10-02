var Game = new function() {
	this.WIDTH = 800;
	this.HEIGHT = 600;
	this.actors = [];

	this.initialize = function(context, imgData){
		this.context = context;
		this.imgData = imgData;
		this.ship = new Actors.Ship(imgData);
		this.actors.push(this.ship);
		window.addEventListener('keydown', this.keydownHandler, false);
		window.addEventListener('keyup', this.keyupHandler, false);
		Utils.requestAnimationFrame(this.loop, this);
	}

	this.keydownHandler = function(e) {
		switch(e.keyCode){
			case KEY_CODES['left']:
				pressedKeys['left'] = true;
				break;

			case KEY_CODES['up']:
				pressedKeys['up'] = true;
				break;

			case KEY_CODES['right']:
				pressedKeys['right'] = true;
				break;

			case KEY_CODES['down']:
				pressedKeys['down'] = true;
				break;

			case KEY_CODES['space']:
				pressedKeys['space'] = true;
				break;	
		}
	}

	this.keyupHandler = function(e) {
		switch(e.keyCode){
			case KEY_CODES['left']:
				pressedKeys['left'] = false;
				break;

			case KEY_CODES['up']:
				pressedKeys['up'] = false;
				break;

			case KEY_CODES['right']:
				pressedKeys['right'] = false;
				break;

			case KEY_CODES['down']:
				pressedKeys['down'] = false;
				break;

			case KEY_CODES['space']:
				pressedKeys['space'] = false;
				break;	
		}
	}

	this.verifyShipShot = function() {
		if(pressedKeys['space']) {
			pressedKeys['space'] = false;
			this.actors.push(this.ship.shot());
		}
	}

	this.loop = function() {
		RenderEngine.clear(this.context);
		this.ship.updatePosition();
		this.verifyShipShot();
		for(var i = 0; i < this.actors.length; i++){
			RenderEngine.drawActor(this.context, this.actors[i]);
		}
		Utils.requestAnimationFrame(this.loop, this);
	}
}