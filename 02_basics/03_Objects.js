/*
 1.singleton - ye tab banta hai jab hame ek hi object chahiye hota hai aur uska ek hi instance chahiye hota hai
 2.singleton ka use mostly database connection me hota hai taki ek hi connection ho aur multiple connection na bane
 3.singleton ka use mostly logging me hota hai taki ek hi log file ho aur multiple log file na bane
 4.jab constructor ki tra define karte hai tab singleton banta hai 
   */

 // How to create an object - object literal

 // how to crate symbol
 const mySym= Symbol("Key1");

 const JsUser={
    name:"Hitesh",
    "full name":"Satyam Dubey",
    [mySym]:"myKey1",//  agar app ise square bracket me likhoge tabhi ye use hoga as a symbol
    age:22,
    location:"India",
    email:"satyamdubey@.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wednesday"]
 }

 // way to access object
 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(JsUser["full name"]); // we can not access it without ""
 console.log(JsUser[mySym]); // we can not access it without [] because it is a symbol
 console.log(typeof JsUser[mySym]) // it is giving me symbol not string


//  objects ki value  ko change kaise kartwe hai 
JsUser.email="lana@chargpt.com" // value ko overwrite karna
// agar hum chahte hai ki email koi change na kar paye to freeze kar denge
// Object.freeze(JsUser)//  ab maine email ko freeze kar diya hai chage nhi hoga ab
JsUser.email="lana@gpt.com" // this will not work as the object is frozen
console.log(JsUser);

// Ab object ke andar ek function add kar do
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// same object ko reference karne ke liye use"this"
}
console.log(JsUser.greeting()); // Note: greeting is a function, so we need to call it with parentheses
console.log(JsUser.greetingTwo()); // Note: greetingTwo is a function, so we need to call it with parentheses
