// 😅 JavaScript Meme-Style Questions

// 1. What will this return?
console.log([] + []); 
// Output: "" 
// Because empty arrays are converted to empty strings, then concatenated.

// 2. What about this one?
console.log([] + {}); 
// Output: "[object Object]"
// [] becomes "", {} becomes "[object Object]"; so the result is string concatenation.

// 3. And this?
console.log({} + []); 
// Output: 0
// {} is treated as an empty block, so it's like +[] → 0

// 4. What is the output of this horror show?
console.log(typeof NaN); 
// Output: "number"
// NaN literally means "Not a Number", but typeof says it's a number 🤡

// 5. What does this return?
console.log(true + true); 
// Output: 2
// true is treated as 1, so 1 + 1 = 2

// 6. Can JavaScript handle this?
console.log("5" - 2); 
// Output: 3
// JS does type coercion: "5" → 5, then subtracts

// 7. What will this do?
console.log("5" + 2); 
// Output: "52"
// "+" triggers string concatenation

// 8. null == undefined ?
console.log(null == undefined); 
// Output: true
// They are loosely equal with ==, but not with ===

// 9. typeof null ?
console.log(typeof null); 
// Output: "object"
// Long-standing bug in JS, won't be fixed for backward compatibility

// 10. What does this return?
console.log([] == ![]); 
// Output: true
// Weird coercion: ![] is false, [] becomes falsy, so false == false → true
