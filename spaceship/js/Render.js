var Render = {

	Engine: function() {

		this.clear = function(context) {
			context.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
		}

		this.drawActor = function(context, actor) {
			var rotationInRadians = actor.rotation * Math.PI / 180;
			actor.x += Math.cos(rotationInRadians) * actor.acceleration;
			actor.y += Math.sin(rotationInRadians) * actor.acceleration;
			context.save();
			context.translate(Game.WIDTH / 2 - actor.x, Game.HEIGHT / 2 - actor.y);
			context.rotate(rotationInRadians);
			context.translate(-actor.img.clientWidth/2, -actor.img.clientHeight/2);
			context.drawImage(actor.img, 0, 0);
			context.restore();
		}
	}
}