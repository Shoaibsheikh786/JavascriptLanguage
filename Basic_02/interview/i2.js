let str="hello worrld";
console.log(str.length)
let y="";

for(i=0;i<str.length;i++)
{
    y=str[i]+y;
}
console.log(y);

let strarr=str.split(" ");
console.log(strarr[0]);