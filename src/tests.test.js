import capitalize from "./functions.js";
import { reverseString } from "./functions.js";
import { calculator } from "./functions.js";
import { caesarCipher } from "./functions.js";

test('capitalize capitalizes first letter in asd string', () => {
    expect(capitalize("asd")).toBe("Asd");
})

test('capitalize capitalizes first letter in banana string', () => {
    expect(capitalize("banana")).toBe("Banana");
})


test('reverseString reverses the string "asd"', () => {
    expect(reverseString("asd")).toBe("dsa");
})

test('reverseString reverses the string "banana"', () => {
    expect(reverseString("banana")).toBe("ananab");
})


test('calculator.add adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('calculator.add adds 12 + 23 to equal 35', () => {
    expect(calculator.add(12, 23)).toBe(35);
})

test('calculator.subtract subtracts 3 - 2 to equal 1', () => {
    expect(calculator.subtract(3,2)).toBe(1);
})

test('calculator.multiply 3*2 to equal 6', () => {
    expect(calculator.multiply(3,2)).toBe(6);
})

test('calculator.divide 6/3 to equal 2', () => {
    expect(calculator.divide(6,3)).toBe(2);
})


test('caesarCipher(abc, 1) should return bcd', () => {
    expect(caesarCipher("abc",1)).toBe("bcd");
})

test('caesarCipher(xyz, 3) should return abc; wrapping z to a', () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
})

test('caesarCipher(HeLLo, 3) should return KhOOr; case preservation', () => {
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
})

test('caesarCipher(Hello, World!, 3) should return Khoor, Zruog!; non-alphabet chars should remain same', () => {
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
})
