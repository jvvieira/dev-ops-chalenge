const mul = require('../src/mul');

test('2 x 2 to equal 4', () => {
  let value = mul(2,2)
  expect(value.result).toBe(4)
});

test('validate inputs', () => {
    let value = mul('a', 'b')
    expect(value.result).toBe(0)
})
