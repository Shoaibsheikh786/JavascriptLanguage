// String to Number
let str = "123";
let num = Number(str); // 123

// Number to String
let number = 456;
let strNum = String(number); // "456"

// Boolean to String
let bool = true;
let boolStr = String(bool); // "true"

// String to Boolean
let strBool = "true";
let boolValue = (strBool === "true"); // true

// Number to Boolean
let zero = 0;
let nonZero = 5;
let boolZero = Boolean(zero); // false
let boolNonZero = Boolean(nonZero); // true

// Boolean to Number
let boolTrue = true;
let boolFalse = false;
let numTrue = Number(boolTrue); // 1
let numFalse = Number(boolFalse); // 0

// Implicit Conversion (Type Coercion)
let result = "5" * 2; // 10 (string "5" is converted to number)
let concat = "5" + 2; // "52" (number 2 is converted to string)