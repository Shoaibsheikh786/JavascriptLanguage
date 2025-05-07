let x={
    name: "shoiab",
    age:20,
}

let y=x;

y.name="sheikh";

console.log(x.name); // sheikh
console.log(y.name); // sheikh

let num1="user1";
let num2=num1;;

num2="user2";
console.log(num1); // user1 
console.log(num2); // user2