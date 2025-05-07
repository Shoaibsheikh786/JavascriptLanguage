// Non-primitive data types in JavaScript

// 1. Objects
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log(person);

// 2. Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 3. Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 4. Dates
const today = new Date();
console.log(today);

// 5. Regular Expressions
const regex = /hello/i;
console.log(regex.test("Hello World"));

// 6. Maps
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map);

// 7. Sets
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);