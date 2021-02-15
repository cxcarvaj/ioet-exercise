import assert from 'assert';
import {calculateProfitsPerHour} from '../functions/functions.js'


describe('Object-String', function() {
  describe('#test_profits_per_hour()', function() {
    it('Should return the profit per hour for the employee according to the table', function() {
      assert.equal(calculateProfitsPerHour({'00:01 - 09:00': 30, '09:01 - 18:00': 20, '18:01 - 00:00': 25}, "10:00-12:00"), 40);
    });
  });
});