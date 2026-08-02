// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");  inko das baar likhne me kafi dikkat aayegi so use function

// function definitiion
function sayMyname(){ // ab ek baar function call karne se 10 baar print ho jaega
 console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H"); 
}
sayMyname() // aise run karate hai function ko

// functions to add two numbers - dikkat ye hai ki ye return  nhi kar rha hai
// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }
// const ans=addTwoNumbers(3,4); // gives 7  function call
// // addTwoNumbers(3,"4")// gives 34
// // addTwoNumbers(3,"a");// gives 3a
//  console.log(ans); //gives undefined value


 function addTwoNumber2(number1,number2){
    let result = number1 + number2;
    return result;
    console.log("Hitesh")// ye kabhi exexute hi nhi hoga kyuki return ke baad kuch nhi hota
 }
 const result = addTwoNumber2(3,4)
 console.log("Result :",result)




 function loginUserMessage(username){
    if(username===undefined){// officially write if(!username){}
   console.log("Please Enter a user name");
   return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage("Satyam"))
 console.log(loginUserMessage(""))//gives just logged in
 console.log(loginUserMessage()) // gives undefined


  //******************************* Day2 **********************************

 // agar aapko koi shoppping cart banana ho jisme customer saman add karta hi jaega tab 
 // kaise banayenge hum functions wagera
 function calculateCartPrice(val1,val2,...num1){
     return num1;
 }
 console.log(calculateCartPrice(200,300,400,500))

 //Now see function me object ko kaise pass kiya jata hai
 // object
 const user = {
    username: "Satyam",
    price: 199
 }
 // function
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 // call function
 handleObject(user)
 //direct object bhi paas kar sakte hai function me
 handleObject({
    username : "sam",
    price:399
 })

 // How to pass array in function
 const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){// getArrya mera genneriic naam hai
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// direct bhi paas kar sakte hai
console.log(returnSecondValue([200,400,500,100]))