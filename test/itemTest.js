var expect = require("chai").expect;
var items = require("../lib/items.js");
 
describe("Items", function(){
    describe("#returnValid()", function(){
       it("should return valid item value", function(){
       	
           var args = ["--valueDigit=0001", "--valueStr=Test"];
           var results = items.returnValid(args);
 
           expect(results).to.have.a.property("valueDigit", 001);
           expect(results).to.have.a.property("valueStr", "Test");
       });
   });
});