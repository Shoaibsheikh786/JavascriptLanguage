let d=new Date();

// console.log(d); // 2023-10-05T08:23:14.000Z
// console.log(d.getDate());

// // console.log(d.getTime());
// // console.log("Year "+d.getFullYear());
// // console.log("Month "+d.getMonth()+1); // 0-11
// // console.log("Day "+d.getDay()); // 0-6

// // console.log("Hours "+d.getHours());
// // console.log("Minutes "+d.getMinutes());
// // console.log("Seconds "+d.getSeconds());
// // console.log("Milliseconds "+d.getMilliseconds());
// console.log("Year "+d.getFullYear());
// console.log("Month "+d.getMonth()+1); // 0-11
// console.log("Day "+d.getDay()); // 0-6

// console.log("Hours "+d.getHours());
// console.log("Minutes "+d.getMinutes());
// console.log("Seconds "+d.getSeconds());
// console.log("Milliseconds "+d.getMilliseconds());


// console.log("ISO String: " + d.toISOString());
// console.log("Locale Date String: " + d.toLocaleDateString());
// console.log("Locale Time String: " + d.toLocaleTimeString());
// console.log("Locale String: " + d.toLocaleString());
// console.log("UTC String: " + d.toUTCString());
// console.log("Date String: " + d.toDateString());
// console.log("Time String: " + d.toTimeString());
// console.log("Timestamp: " + Date.now());


let currentDate=new Date();
let dob=new Date("10-02-1999");
let age=currentDate.getFullYear()-dob.getFullYear();


console.log("your age is "+age+" years");


console.log(dob.toLocaleDateString())
console.log(currentDate+" "+ currentDate.toLocaleDateString())



