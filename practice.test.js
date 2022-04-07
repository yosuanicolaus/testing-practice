import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analizeArray,
} from "./practice";

it("capitalize one word", () => {
  expect(capitalize("alice")).toBe("Alice");
  expect(capitalize("bob")).toBe("Bob");
});

it("reverse a string", () => {
  expect(reverseString("alice")).toBe("ecila");
  expect(reverseString("23456")).toBe("65432");
  expect(reverseString("q w x")).toBe("x w q");
});

it("do some calculations with the calculator", () => {
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.multiply(9, 5)).toBe(45);
  expect(calculator.divide(10, 5)).toBe(2);
});

it("caesar chiper a string", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
  expect(caesarCipher("hello", 0)).toBe("hello");
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
  expect(caesarCipher("aBc", 2)).toBe("cDe");
  expect(caesarCipher("b a n a n a", 1)).toBe("c b o b o b");
});

it("analize array", () => {
  const arr = [1, 8, 2, 3, 4, 6];
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analizeArray(arr)).toEqual(object);
});
