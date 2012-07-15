buster.testCase( "Currying tests", {
	"basic currying": function() {
		var multiply = function( a, b ) { return a * b }
		var x2 = multiply.curry( 2 ),
			x3 = multiply.curry( 3 ),
			x10 = multiply.curry( 10 );
		assert.equals( x2(10), 20 );
		assert.equals( x2(1), 2 );
		assert.equals( x3(10), 30 );
		assert.equals( x10(5), 50 );
	},

	"multiple currying" : function() {
		var multiply3 = function( a, b, c ) { return a * b * c },
			multiply2 = multiply3.curry( 2 ),  //multiply3( 2, x, x )
			multiply1 = multiply2.curry( 3 );  //multiply3( 2, 3, x )

		assert.equals( multiply2( 2, 3 ), 12 );
		assert.equals( multiply1( 4 ), 24 );
	}
} );