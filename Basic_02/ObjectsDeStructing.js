const emp = {
    name: "John",
    age:"21",
    PaymentAddress: {
        city: "New York",
        state: "NY",    
    }
}

const { name, age } = emp; // Destructuring assignment
console.log(name); // John  
console.log(age); // 21

const { city } = emp.PaymentAddress; // Destructuring assignment

console.log(city); // New York