var Utils = new function() {
	this.setInterval = function(func, context, delay) {
		return setInterval(function() {
			func.call(context)
		}, delay);
	}
}