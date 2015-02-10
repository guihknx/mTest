var expect = require("chai").expect;
var items = require("../lib/items.js").Items;
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
	});
	
});