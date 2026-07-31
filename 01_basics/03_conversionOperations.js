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

     //   ********************* Operations  ************************

     let value=3
     let negValue= -value
     console.log(negValue); // hamri +ve value negative ban gyi

    //  console.log(2+2);
    //  console.log(2-2);
    //  console.log(2*2); just basic maths operations
    //  console.log(2**2);
    //  console.log(2/2);
    //  console.log(2%2);

    let str1="hello"
    let str2="hitesh"
    // en dono ko jodna hai
    let str3= str1 + str2;
    console.log(str3);

    console.log("1"+ 2);
    console.log(1+ "2");
    console.log("1"+ 2+ 2);
    console.log(1+2+"2");
    console.log(1+"2"+1);
    console.log(1+1+"2"+1);

//     some other conversion

console.log(true);//it gives true as output
console.log(+true);//it gives o/p as 1
console.log(+""); // gives o/p as 0

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter=100
gameCounter++;  //it gives 101 as o/p
console.log(gameCounter);