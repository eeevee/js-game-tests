var Utils = {

	setInterval: function(func, context, delay) {
		return setInterval(function() {
			func.call(context)
		}, delay);
	},

	requestAnimationFrame: function(func, context) {
		var actualRequestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                           				  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  		window.requestAnimationFrame = actualRequestAnimationFrame;
		return window.requestAnimationFrame(function(){
			func.call(context)
		});
	}
}