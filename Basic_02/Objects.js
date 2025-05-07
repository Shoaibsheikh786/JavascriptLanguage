const Student ={
    name:"John",
    age: 20,
    major: "Computer Science",
    "full name ": "Sheikhu baba",
    x: [1,2,3,4,5],
    mygreeting: function(){
        console.log("Hello, my name is " + this.name);
    }
}
//Object.freeze(Student); // Prevents modification of the object
Student.newName="Ali";
Student.greeting= function() {
    console.log("Hello, my name is " + this.name);
}
Student.greetingsTwo= function() {
    console.log("Hello, my name is " + this["full name "]);
}
console.log("-----------------------------------------------");
Student.mygreeting();


// console.log(Student.name);
// console.log(Student["name"]);
// console.log(Student["full name"]);
// console.log(Student.x[3]);

//console.log(Student);
