const add = require('../stringCalculator');

//1->Handle empty string
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

//2->Handle single number input
test('should return the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
});

//3->Handle two comma-separated numbers
test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
});

//4->Handle any amount of comma-separated numbers
test('should return the sum of any amount of comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

//5->Support new line delimiters between numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

//6-> Support custom delimiters
test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

//7->Throw exception for negative numbers
test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});
