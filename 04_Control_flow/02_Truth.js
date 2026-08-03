const usernemail = "h@gmail.com"
// hamne phele se hi maan liya hai ki string ke andar true value hai
if(usernemail){
    console.log("Got user email")
}else{
    console.log("Dont have user email");
}


// empty array
const Array = []
if(Array.length === 0){
    console.log("Array is empty");
}

// detecting if empty object hai ya nhi
const emptyObj={}
// if(Object.keys(empptyObj)) ye mujhe ek array return karega to uski length lelo
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

//  Nullish Coalescing Operator (??): null , undefined
let val1;
// val1=5 ?? 10 // gives 5
// val1= null ?? 10 // gives 10
val1 = undefined ?? 15 // gives 15
val1 = null ?? 10 ?? 15 // gives 10

console.log(val1);

// Ternary Operaator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80  ? console.log("less than 80") : console.log("more than 80")
// agar hai to less than print karo nhi to more than