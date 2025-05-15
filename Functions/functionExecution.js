console.log("hello world"+x) ;
var x=10;

function chai(){
    console.log("hello chai");
}   

chai();

//falsy values
// 0, "", undefined, null, NaN, false
// truthy values    
// "0", " ", [], {}, true, 1, -1, Infinity, -Infinity, function(){}

console.log(Boolean(0)); 

//tricky question


(function abc(x='muneer')
{
    console.log("Hello Abc "+x);
})();