var Items = {
	returnValid: function() {
		return {
			valueDigit: 001,
			valueStr: "Test"
		}
	},
	returnValidByParams: function(intVal){
		// var err = new ReferenceError();
		// var fn = function () { throw err; }

		if( intVal == 5){
			return intVal;			
		}
	
		return ("Error thrown");
	
	}
};

module.exports = Items;

