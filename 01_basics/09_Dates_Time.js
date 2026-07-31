// Dates

let myDate = new Date()
console.log(myDate.toString());// by converting into string thoda thoda smaj aa rha hai
console.log(myDate.toDateString());// it gives exact date
console.log(myDate.toLocaleDateString()); // Gives date
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());// ye sab kuch mst de rha hai time and date both

console.log(typeof myDate);

// creating ek particulaer date
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toLocaleString());// knowing it what is it?

let myNewDate=new Date("2023-01-14")
console.log(myNewDate.toLocaleString());

// jab mujhe exact time pta krna ho
let myTimeStamp= Date.now()
console.log(myTimeStamp);//aaj tak ki date ka millisecond me value
console.log(myCreatedDate.getTime());//ek given date  ki millisecond me value

// Now to convert it into seconds
// console.log(Date.now()/1000);// ab aaj tak ki date second me aayegi na ki milisecond me
// divide karne se dikkat ho sakti hai
console.log(Math.floor(Date.now()/1000));//ab ye second me ans dega

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth())

// ye bhut kaam ata hai
newDate.toLocaleString('default',{
    weekday: "long",
})