var Utils = new function() {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  	window.requestAnimationFrame = requestAnimationFrame;

	this.setInterval = function(func, context, delay) {
		return setInterval(function() {
			func.call(context)
		}, delay);
	}

	this.requestAnimationFrame = function(func, context) {
		return window.requestAnimationFrame(function(){
			func.call(context)
		});
	}
}