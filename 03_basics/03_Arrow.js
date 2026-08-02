const user = {
    username: "Hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);// mai isi bracket wle username ko 
        // bta rha hu islea this use kiya hai
        console.log(this); // ye pura object print karega 
    }
}
user.welcomeMessage()
 user.username = "Sam"
 user.welcomeMessage() // name change ho jaega ab

 console.log(this);// abhi global ke andar koi content hi nhi hai so empty objecct { }  dega 


 // function ke andar this ko call kiye gya hai
 function chai(){
    let username = "Hitesh"
    console.log(this.username); // gives undefined
 }
 chai()


 // Arrow Function
 const chai2 = () => {
    let username = "Hitesh"
    console.log(this.username);// undefined
    console.log(this);  // gives emptyParenthesis
 }
 chai2()

 // Basic Arrow Function
 const addTwo= (num1,num2) => { // curlly bracket use hine pe  return likhna hi  padega
    return num1+num2
 }
 console.log(addTwo(3,4))

//  Implicit return ki tra bhi use hota hai arrow function
const addTwo2 = (num1,num2) => num1+num2
//agar paremthesis use karoge to return  nhi likhna padega arrow function me
const addTwo3 = (num1,num2) => (num1+num2)
console.log(addTwo2(3,4));
console.log(addTwo3(3,4));

// agar aapko arrow function me object return karna ho to parenthesis ka use karna padega
// javascript me use hoga ye
const addTwo4 = (num1,num2) => ({username : "hitesh"})
console.log(addTwo4(3,4))


// arrow function ka use hum array me bhi karte 
const myArray = [2,5,3,7,8]
myArray.forEach(function () {}) // ye bhi corrrect syntax hai normal function

myArray.forEach(() => {}) // arrow function ka use iin array