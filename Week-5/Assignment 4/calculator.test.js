const mathOperations = require('./calculator');
 
describe("Calculator tests", () => {
 test('adding 3 + 4 should return 7', () => {
   // arrange and act
   var result = mathOperations.sum(3,4)
 
   // assert
   expect(result).toBe(7);
 });
 
 test("subtracting 3 from 4 should return 1", () => {
   // arrange and act
   var result = mathOperations.diff(4,3)
 
   // assert
   expect(result).toBe(1);
 });
 
 test("multiplying 3 and 4 should return 12", () => {
   // arrange and act
   var result = mathOperations.product(3,4)
 
   // assert
   expect(result).toBe(12);
 });
})