function printMyName() {
    console.log("My name is shaoib");
    return "hello world";
}

const s=printMyName();
console.log(` value returned by function is ${s}`);

const user = {
    name:"shaoib",
    age:22,
    isMarried:false
}

function myFunction(getData)
{
  console.log(`Name is ${getData.name} and age is ${getData.age} and married status is ${getData.isMarried}`);  
}

 myFunction(user);

 myFunction({
    name: "sheikh",
    age: 23,
    isMarried: true
 })


