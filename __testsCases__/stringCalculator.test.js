const add = require('../stringCalculator');

//Handle empty string
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

//Handle single number input
test('should return the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
});
