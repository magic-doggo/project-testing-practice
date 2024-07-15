import capitalize from "./capitalize.js";

test('capitalize exists', () => {
    expect(capitalize("asd")).toBe("Asd");
})

test('capitalize exists', () => {
    expect(capitalize("banana")).toBe("Banana");
})