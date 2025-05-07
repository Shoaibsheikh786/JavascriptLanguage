class box
{
  lenght=5;
  breadht=2;
  height=3;
  area = function()
  {
    console.log("Area of box is : "+this.lenght*this.breadht*this.height);
  }

  sum= function(){
    return this.lenght+this.breadht+this.height;
  }
}

let b1 =new box();
b1.area();
let s=b1.sum();
console.log("Sum of box is : "+s);


const person ={
  id:1,
  fullname :{
    firstName:"John",
    lastName:"Doe"
  },
  printDetails: function(){
    console.log("ID: "+this.id+" Name: "+this.fullname.firstName+" "+this.fullname.lastName);
  }
}
console.log(person.fullname.firstName);



const o1={
  id:1,
  name:"John",
  age:25,
}
const o2={
  id2:1,
  name2:"John",
  age2:25,


}
//const o3={...o1,...o2};
const o3=Object.assign(o1,o2);
console.log(o3.hasOwnProperty("id"));
console.log(Object.keys(o3));
console.log(Object.values(o3));