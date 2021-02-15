import assert from 'assert';
import {calculateProfitsPerHour} from '../functions/functions.js'


describe('Object-String', function() {
  describe('#test_profits_per_hour(1)', function() {
    it('Should return the profit per hour for the employee according to the table', function() {
      console.log("Real value:",calculateProfitsPerHour({'00:01 - 09:00': 30, '09:01 - 18:00': 20, '18:01 - 00:00': 25},"10:00-12:00"))
      console.log("Expected value:",40)
      assert.equal(calculateProfitsPerHour({'00:01 - 09:00': 30, '09:01 - 18:00': 20, '18:01 - 00:00': 25}, "10:00-12:00"), 40);
    });
  });
});


describe('Object-String', function() {
  describe('#test_profits_per_hour(2)', function() {
    it('Should return the profit per hour for the employee according to the table', function() {
      console.log("Real value:",calculateProfitsPerHour({'00:01 - 09:00': 30, '09:01 - 18:00': 20, '18:01 - 00:00': 25},"18:01-23:00"))
      console.log("Expected value:",125)
      assert.equal(calculateProfitsPerHour({'00:01 - 09:00': 30, '09:01 - 18:00': 20, '18:01 - 00:00': 25}, "18:01-23:00"), 125);
    });
  });
});