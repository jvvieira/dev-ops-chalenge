const mul = require('../src/mul');

test('2 x 2 to equal 4', () => {
  expect(mul(2, 2)).toBe(4)
});

test('validate inputs', () => {
  expect(mul('a', 'b')).toBe(0)
})
