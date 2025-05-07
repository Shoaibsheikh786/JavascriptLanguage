let x=[14,3,5,3,32,4,5,6,7,8,9,10,11]
let y=[];

for(i=0;i<x.length;i++){
  y[i]=x[x.length-i-1];
}
for(i=0;i<y.length;i++){
    console.log(y[i]);
}