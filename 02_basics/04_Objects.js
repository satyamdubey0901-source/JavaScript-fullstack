// isme hum singleton object padenge aur constructor function ka use karke kaise decalre karege

const tinderUser = new Object(); // ye ek singleton object create kar raha hai
const tinderUser2 = {} // ye bhi ek object create kar raha hai nonsingleton

//chalo kuch values bhi de dete hai
tinderUser.id = "123abc";
tinderUser.name = "Hitesh";
tinderUser.isLoggedIn = false;

console.log(tinderUser); 

const regularUser ={
    email: "some@gmail.com",
    fullname: {   // ye bhi ek object hai jo ki regularUser ke andar hai
        userfullName :{   // also an object inside fullname object
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullName.firstName); // accessing nested object values

// chalo objects ko combine karna seekhte hai
const obj1 ={1:"a", 2:"b"};
const obj2 ={3:"a", 4:"b"};
const obj3={obj1,obj2} // ye obj1 aur obj2 ko combine kar raha hai but ache se combine nhi ho rha
const obj4=Object.assign({},obj1,obj2) // ye ache se obj1 aur obj2 ko ache se combine kar raha hai
console.log(obj3);
console.log(obj4);
// The best way to do so is using spread operator
const obj5={...obj1,...obj2}
console.log(obj5);

// jab database se values aati hai to array of objects karke aati hai
const users=[
    {
        id: 1,
        email: "user1@gmail.com",
        
    },
    {
        id: 2,
        email: "user2@gmail.com",
    }
]
//  now how to access them
users[1].email 
console.log(tinderUser);
console.log(Object.keys(tinderUser));// btana padt hai ki kis object pe ye run karna chahte ho
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // ye key value pair me dega

// to check if a key is present in an object or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//isLoggedIn is the property that we are searching

// ********************************Next Day********************************

// Destructuring of objects
const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"Satyam"
}
// to use content of that
course.courseInstructor// this is syntax 1 for the accessing of content

const {courseInstructor} =course // This is the second syntax
// hume agar ye naam bada lag rha hai to hum ise alias bhi de sakte hai
const {courseInstructor:Instructor} = course
console.log(Instructor);

// In React we use this concept
const navBar=({company}) => { // curly braces jaha dekho smaj jao ki destructuring ki gyi hai
}
navBar(company = "Hitesh")


    // ***********************************    API ***********************************

    // {   // api es format me bhi mil sakte hai
    //     "name" : "Satyam",
    //     "coursename" : "Js in Hindi",
    //     "price" : "free"
    // }

    // api ka second format
    [
        {},
        {},
        {}
    ]

