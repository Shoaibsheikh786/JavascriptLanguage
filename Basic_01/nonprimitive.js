const Box ={
 length: 10,
 breadth: 5,
 height:30,
}

console.log(Box)
console.log(Box.length) // 10


let person= {
    name: "shoaib",
    age: 20,
    isEmployed: true,
    greet: function() {
        console.log("Hello, " + this.name);
    },
    newGreet: function()  {
        console.log("New Gree Hello, " + this.name);
    }
}

person.greet();
person.newGreet();
person.age = 25; // Update age property
console.log(person.age); // 25

Box.breadth = 20; // Update breadth property;
console.log(Box.breadth); // 20