if( typeof Function.prototype.curry === 'undefined' ) {
	Function.prototype.curry = function() {
		var that = this,
			curryArgs = Array.prototype.slice.call( arguments );
		return function() { 
			return that.apply( this, curryArgs.concat( Array.prototype.slice.call( arguments ) ) );
		};
	};
}