var Game = {

	WIDTH: 800,
	HEIGHT: 600,
	actors: [],

	initialize: function(context, imgData){
		this.context = context;
		this.imgData = imgData;
		this.ship = new Actors.Ship(imgData);
		this.actors.push(this.ship);
		this.engine = new Render.Engine();
		window.addEventListener('keydown', this.keydownHandler, false);
		window.addEventListener('keyup', this.keyupHandler, false);
		Utils.requestAnimationFrame(this.loop, this);
	},

	keydownHandler: function(e) {
		switch(e.keyCode){
			case Keyboard.KEY_CODES['left']:
				Keyboard.pressedKeys['left'] = true;
				break;

			case Keyboard.KEY_CODES['up']:
				Keyboard.pressedKeys['up'] = true;
				break;

			case Keyboard.KEY_CODES['right']:
				Keyboard.pressedKeys['right'] = true;
				break;

			case Keyboard.KEY_CODES['down']:
				Keyboard.pressedKeys['down'] = true;
				break;

			case Keyboard.KEY_CODES['space']:
				Keyboard.pressedKeys['space'] = true;
				break;	
		}
	},

	keyupHandler: function(e) {
		switch(e.keyCode){
			case Keyboard.KEY_CODES['left']:
				Keyboard.pressedKeys['left'] = false;
				break;

			case Keyboard.KEY_CODES['up']:
				Keyboard.pressedKeys['up'] = false;
				break;

			case Keyboard.KEY_CODES['right']:
				Keyboard.pressedKeys['right'] = false;
				break;

			case Keyboard.KEY_CODES['down']:
				Keyboard.pressedKeys['down'] = false;
				break;

			case Keyboard.KEY_CODES['space']:
				Keyboard.pressedKeys['space'] = false;
				break;	
		}
	},

	verifyShipShot: function() {
		if(Keyboard.pressedKeys['space']) {
			Keyboard.pressedKeys['space'] = false;
			this.actors.push(this.ship.shot());
		}
	},

	loop: function() {
		this.engine.clear(this.context);
		this.ship.updatePosition();
		this.verifyShipShot();
		console.log(this.ship.x + ":" + this.ship.y);
		var actorsToRemove = [];
		for(var i = 0; i < this.actors.length; i++){
			var actor = this.actors[i];
			if(actor instanceof Actors.Bullet) {
				if(this.bulletReachScreenLimits(actor)) {
					actorsToRemove.push(actor);
					continue;
				}
			}
			this.engine.drawActor(this.context, actor);
		}
		this.clearActors(actorsToRemove);
		Utils.requestAnimationFrame(this.loop, this);
	},

	clearActors: function(actorsToRemove) {
		if(actorsToRemove.length == 0) return;
		var index = this.actors.indexOf(actorsToRemove[0]);
		if(index == -1) return;
		this.actors.splice(index, 1);
		actorsToRemove.splice(0, 1);
		if(actorsToRemove.length > 0) {
			this.clearActors(actorsToRemove);
		}
	},

	bulletReachScreenLimits: function(bullet) {
		if(bullet.x < -this.WIDTH/2 || bullet.x > this.WIDTH/2 || bullet.y < -this.HEIGHT/2 || bullet.y > this.HEIGHT/2) {
			return true;
		}
		return false;
	}
}