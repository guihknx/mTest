
module.exports.Items = {
	returnValid: function() {
		return {
			valueDigit: 001,
			valueStr: "Test"
		}
	},
	returnValidByParams: function(intVal){
		if( intVal == 5 && intVal != null){
			return intVal;
			
		}else{
			throw('Expect 5 :)');
		}
	}
};
