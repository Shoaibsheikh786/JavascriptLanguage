function outFunction(){
    let name="shaoib";
    console.log("This is the outFunction from function3.js");
    function innerFunction(){
        let email="shaoib@gmail.com"
        console.log("This is the innerFunction from function3.js "+ name);
    }
    return innerFunction;
    
}
let x=outFunction();

x();  // close the inner function
