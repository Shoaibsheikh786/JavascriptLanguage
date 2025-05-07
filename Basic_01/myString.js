let name="my name is shoaib is";

console.log(name.substring(0,5));
console.log(name.split(" "));
 
let arr=name.split(" ");
console.log(arr[0]);

console.log(name.replace("my","your"));

console.log(name.indexOf("is"));

console.log(name.lastIndexOf("is"));


console.log(name.includes("is")); // true

let x=`sheikh`;
console.log(`my name is ${x}`)


let y = new String("new way to create string");
console.log(y); // [String: 'new way to create string']

console.log(typeof y); // object
console.log(typeof name); // string
console.log("--------------------------------------");
for (let i=0; i<arr.length; i++){
    console.log(arr[i]+" "+i);
}


console.log(y instanceof String); // true