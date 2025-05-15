// Truthy and Falsy Values in JavaScript

// Falsy Values in JavaScript
// These are values that are considered false when encountered in a boolean context.
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Falsy Values:");
falsyValues.forEach(value => console.log(`${value} is falsy:`, Boolean(value)));

// Truthy Values in JavaScript
// Any value that is not falsy is considered truthy.
const truthyValues = [true, 1, -1, "string", {}, [], Infinity, -Infinity,];
console.log("\nTruthy Values:");
truthyValues.forEach(value => console.log(`${value} is truthy:`, Boolean(value)));

// Common Interview Questions on Truthy and Falsy Values

// 1. What are falsy values in JavaScript?
// Answer: Falsy values are values that evaluate to false in a boolean context. 
// They include: false, 0, -0, 0n, "", null, undefined, and NaN.

// 2. What are truthy values in JavaScript?
// Answer: Truthy values are all values that are not falsy. Examples include: true, non-zero numbers, non-empty strings, objects, arrays, etc.

// 3. How can you check if a value is truthy or falsy?
// Answer: You can use the Boolean() function or a double NOT (!!) operator to check if a value is truthy or falsy.
console.log("***********************************")
console.log("\nTruthy or Falsy Check:");
const valuesToCheck = [false, 1, 0, "hello", "", null, undefined, {}, [],"0","false"];
valuesToCheck.forEach(value => {
    console.log(`${value}:`, Boolean(value) ? "Truthy" : "Falsy");
});

// 4. What is the difference between == and === when comparing truthy and falsy values?
// Answer: The == operator performs type coercion, so it may consider different types as equal (e.g., 0 == false is true). 
// The === operator checks for both value and type equality (e.g., 0 === false is false).

console.log("\nEquality Comparison:");
console.log("0 == false:", 0 == false); // true
console.log("0 === false:", 0 === false); // false
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false