const score=400
console.log(score)
const balance=new Number(100)
console.log(balance);

// converted numbeer to string
console.log(balance.toString().length);// to find length of string
console.log(balance.toFixed(2));

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3))

// to know ki number me kitne zeros hai
const hundreds=100000000
console.log(hundreds.toLocaleString());// ye us wli numbering ke hisaab se dega
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-9));// kai baar aapke paas -ve values rahengi unhe  aapko +ve karna ho to
console.log(Math.round(4.3));// roundoff kar dega
console.log(Math.ceil(4.6));// top value de  dega
console.log(Math.floor(6.2));// floor value

// To find minimum value in an array
console.log(Math.min(4,3,6,8));
console.log(Math.max(2,8,9,0));

console.log(Math.random());// iski value hamesa 0 and 1 ke beech me aayegi
console.log((Math.random()*10) +1); // ab iski range bad jaegi
console.log(Math.floor(Math.random()*10)+1);
// isse mujhe ek desired range ka  number milega
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)