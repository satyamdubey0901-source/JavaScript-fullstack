// Control Flow
const isUserLoggedIn=true;
if(3!=2){
// consition true hhai islea andar ka run ho jaega
}

if(false){
    // iske andar ka code run hi nhi hoga becuase condition hi false ho gyi
}

const temperature=41
if(temperature<50){  // === ye type bhi checck karte hai
    console.log("executed");
}else{
    console.log("not executed");
}
    

const score=200
if(score>100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // power is not defined
console.log(`User Power :${score}`);// User Power: 200


// shorthand notation
const balance = 1000
if(balance >500) console.log("test");

// nested loop
const cost=1000
if(cost < 500){
    console.log("less than 500");
}else if(cost <750){
    console.log("less than 750")
}else if(cost <900){
    console.log("less than 900")
}else{
    console.log("Bhag yha se")
}

// practical example
const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}
if(userLoggedIn || loggedInFromGoogle ){
    console.log("Ghar pe chai hai?")
}


// *********************** Switch *********************************
// syntax
// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }

const month=3
switch (month) {
    case 1:// value 1 ke barabar hai kya
        console.log("January")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("March")
        break;

    default:
        console.log("default case match")
        break;
}
