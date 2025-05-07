// Comparison Operators in JavaScript

// Equal to (==)
console.log(5 == '5'); // true (checks value only)

// Not equal to (!=)
console.log(5 != '5'); // false (checks value only)

// Strict equal to (===)
console.log(5 === '5'); // false (checks value and type)

// Strict not equal to (!==)
console.log(5 !== '5'); // true (checks value and type)

// Greater than (>)
console.log(10 > 5); // true

// Less than (<)
console.log(10 < 5); // false

// Greater than or equal to (>=)
console.log(10 >= 10); // true

// Less than or equal to (<=)
// false

// Confusing examples
console.log(null == 0); // false (null is only loosely equal to undefined)
console.log(null === 0); // false (different types)
console.log(undefined == null); // true (loosely equal)
console.log(undefined === null); // false (different types)
console.log('' == 0); // true (empty string loosely equals 0)
console.log('' === 0); // false (different types)
console.log(false == 0); // true (false loosely equals 0)
console.log(false === 0); // false (different types)