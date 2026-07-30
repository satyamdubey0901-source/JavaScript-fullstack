let score= "33abc"

console.log(typeof score);
// console.log(typeof (score)); both are same

// ab agar hame pta hai ki ye string me hai input 33 but hame ise as a number use karna hai
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);// it is showing Nan when input numbeer is 33abc

let isLoggedIn=1
// ab number ko boolean me convert karte hai
let booleanIsLoggedIn=  Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Lets convert a number into string
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);