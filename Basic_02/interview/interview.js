//closure
function createCounter() {
    let count=10;
    function innerfunction()
    {
        console.log(count)
    }
    count=20;
 //   return innerfunction;

    function anotherfunction()
    {  
        count=30;
        console.log(count)
    }
}
function check()
{
    console.log("Hello world from check function")
    count=20;
    function innerfunction()
    {
        console.log(count)
    }
    return innerfunction;
}
let x=check();
x();  //closure
console.log(`----------------------------------------------`)
let z=check;
z();