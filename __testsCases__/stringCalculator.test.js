const add = require('../stringCalculator');

//Handle empty string
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

//Handle single number input
test('should return the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
});

//Handle two comma-separated numbers
test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
});

//Handle any amount of comma-separated numbers
test('should return the sum of any amount of comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

//Support new line delimiters between numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});
