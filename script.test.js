import {
  sum,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  bubbleSort,
  analyzeArray,
} from "./script.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test('turns "string" to "String"', () => {
  expect(capitalize("string")).toMatch("String");
});
test("reverses the given string", () => {
  expect(reverseString("string")).toBe("gnirts");
});
test("adds, subtracts, divides and multiplies", () => {
  const calculator = new Calculator();
  expect(calculator.add(3, 4)).toBe(7);
  expect(calculator.subtract(3, 4)).toBe(-1);
  expect(calculator.divide(3, 4)).toBeCloseTo(0.75);
  expect(calculator.multiply(3, 4)).toBe(12);
});
test("caesar-ciphers a string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 29)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("bubblesorts", () => {
  expect(bubbleSort([1, 8, 3, 4, 2, 6])).toEqual([1, 2, 3, 4, 6, 8]);
});
test("analyzes an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
