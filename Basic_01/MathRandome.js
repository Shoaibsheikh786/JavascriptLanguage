// Demonstrating basic methods of the Math class in JavaScript

// Math constants
console.log("Math.PI:", Math.PI); // Value of PI
console.log("Math.E:", Math.E); // Euler's number

// Rounding methods
console.log("Math.round(4.7):", Math.round(4.7)); // Rounds to the nearest integer
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // Rounds up to the next integer
console.log("Math.floor(4.9):", Math.floor(4.9)); // Rounds down to the previous integer
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // Removes the fractional part

// Power and square root
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 2 raised to the power of 3
console.log("Math.sqrt(16):", Math.sqrt(16)); // Square root of 16

// Absolute value
console.log("Math.abs(-5):", Math.abs(-5)); // Absolute value of -5

// Trigonometric methods
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Sine of 90 degrees
console.log("Math.cos(0):", Math.cos(0)); // Cosine of 0 degrees
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Tangent of 45 degrees

// Minimum and maximum
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // Minimum value
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // Maximum value

// Random number
console.log("Math.random():", Math.random()); // Random number between 0 and 1

// Logarithmic methods
console.log("Math.log(1):", Math.log(1)); // Natural logarithm (base e)
console.log("Math.log10(100):", Math.log10(100)); // Base 10 logarithm

// Exponential
console.log("Math.exp(1):", Math.exp(1)); // e raised to the power of 1

//________________________________________________________________________
// Number formatting methods

// toFixed() - formats a number using fixed-point notation
let num1 = 123.456;
console.log("num1.toFixed(2):", num1.toFixed(2)); // Rounds to 2 decimal places

// toPrecision() - formats a number to a specified length
let num2 = 123.456;
console.log("num2.toPrecision(5):", num2.toPrecision(5)); // Formats to 5 significant digits

// toExponential() - returns a string with a number in exponential notation
let num3 = 123456;
console.log("num3.toExponential(2):", num3.toExponential(2)); // Exponential form with 2 decimals


let num4=12.3456;
console.log(num4.toFixed(2));
console.log(num4.toPrecision(5));