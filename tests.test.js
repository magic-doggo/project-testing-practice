import capitalize from "./functions.js";
import { reverseString } from "./functions.js";

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