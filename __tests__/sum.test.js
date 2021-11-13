// sum.test.js
const func = require('../scripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});


test('adds 1 + 2 to equal 3 import', () => {
  expect(func.sum(1,2)).toBe(3);
});