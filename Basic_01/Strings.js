// Strings in JavaScript and common string methods

// Creating strings
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, ${singleQuoteString}`;

// Common string methods
let str = "JavaScript is awesome!";

// 1. Length of the string
console.log(str.length); // 23

// 2. Convert to uppercase
console.log(str.toUpperCase()); // "JAVASCRIPT IS AWESOME!"

// 3. Convert to lowercase
console.log(str.toLowerCase()); // "javascript is awesome!"

// 4. Find the index of a substring
console.log(str.indexOf("is")); // 11

// 5. Find the last index of a substring
console.log(str.lastIndexOf("a")); // 3

// 6. Check if a string includes a substring
console.log(str.includes("awesome")); // true

// 7. Extract a substring
console.log(str.substring(0, 10)); // "JavaScript"

// 8. Extract a substring using slice
console.log(str.slice(0, 10)); // "JavaScript"
console.log(str.slice(-8)); // "awesome!"

// 9. Split a string into an array
console.log(str.split(" ")); // ["JavaScript", "is", "awesome!"]

// 10. Replace a substring
console.log(str.replace("awesome", "fantastic")); // "JavaScript is fantastic!"

// 11. Replace all occurrences (using regex)
let newStr = "This is a test. This is only a test.";
console.log(newStr.replace(/is/g, "was")); // "Thwas was a test. Thwas was only a test."

// 12. Trim whitespace
let paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); // "Hello, World!"

// 13. Pad the start of a string
console.log(str.padStart(30, "*")); // "*******JavaScript is awesome!"

// 14. Pad the end of a string
console.log(str.padEnd(30, "*")); // "JavaScript is awesome!*******"

// 15. Repeat a string
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// 16. Get a character at a specific index
console.log(str.charAt(0)); // "J"

// 17. Get the Unicode value of a character
console.log(str.charCodeAt(0)); // 74 (Unicode for 'J')

// 18. Access a character using bracket notation
console.log(str[0]); // "J"

// 19. Check if a string starts with a substring
console.log(str.startsWith("Java")); // true

// 20. Check if a string ends with a substring
console.log(str.endsWith("!")); // true

// 21. Concatenate strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"

// 22. Raw string (useful for escaping)
console.log(String.raw`C:\Users\Name`); // "C:\Users\Name"

