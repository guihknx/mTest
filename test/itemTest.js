var expect = require("chai").expect;
var items = require("../lib/items.js");
var assertions = require('mocha').it
var assert = require('assert');

describe("Items", function(){
	describe("#returnValid()", function(){
		it("should return valid item value", function(){
			
			var results = items.returnValid();

			expect(results).to.have.a.property("valueDigit", 001);
			expect(results).to.have.a.property("valueStr", "Test");
		});
	});

	describe("#returnValidByParams", function(){
		it("should return valid item value based in params", function(){
			
			var param = 5;

			var result = items.returnValidByParams(param);
			expect(result).to.be.equal(5);	

		});
		
		it("should throw a exception if the value is invalid", function(){
			
			var param = 2;

			var result = items.returnValidByParams(param);
		
			expect(result).equals('Error thrown');

		});
	});
});