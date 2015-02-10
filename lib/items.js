
module.exports.Items = {
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
		}else{
			// var err = new ReferenceError('This is a bad function.');
			return ("Error thrown");
		}
	}
};
