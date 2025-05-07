let x=new Array(5);
// for
// (i=0;i<x.length;i++){
//     x[i]=i+1;
// }
// console.log(x); // 1,2,3,4,5

let y=[];
y[0]=1;
y[1]=2; 
console.log(Array.isArray(y)+" "+ y.length)
y.push(30);
y.push(25);
console.log(Array.isArray(y)+" "+ y.length)

let nArr= new Array(5);

console.log(nArr.includes(2)); // false
console.log(nArr.includes(2,0)); // false
console.log(nArr.indexOf(0));

console.log(nArr);

nArr.fill(5,0,3);
console.log(nArr); // 5,5,5,5,5