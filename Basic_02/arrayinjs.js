let arr1=[2,9,4,5,6,7,8,1,3];

// console.log(arr1);

// console.log(arr1[0]); // 2

// console.log(arr1.shift()); // 2;
// console.log(arr1.shift()); // 2;
// console.log(arr1.unshift(14)); // 2;
// console.log(arr1);

// console.log(arr1.pop()); // 3;
// console.log(arr1.pop()); // 3;          
// console.log(arr1.pop()); // 3;
// console.log(arr1.pop()); // 3;
// console.log(arr1.pop()); // 3;
console.log("A -> "+arr1);
console.log(arr1.slice(2,5)); // 4,5,6
console.log(arr1);
let y=arr1.splice(2,3); // 4,5,6
console.log("B -> "+arr1); // 2,9,7,8,1,3
console.log(Array.isArray(y));
let z=y.join("");;
console.log("C -> "+z); // 4-5-6

console.log("y -> "+y.toString); // 4,5,6

console.log(arr1.reverse().toString().replaceAll(",","-")); // 3-1-8-7-9-2

console.log(arr1.join(" ").split(" ")[3]); // 3 1 8 7 9 2

