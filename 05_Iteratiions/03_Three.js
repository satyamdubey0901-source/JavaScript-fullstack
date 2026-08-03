// for of loop - ye loop hai ek ek karke cheejo ko lega

const  arr = [1,2,3,4,5]
for (const num  of arr) {
    console.log(num);
}


const greetings = "Hello World"
for(const greet of greetings){
    console.log(greet)
}


// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

// how to apply for of loop here
for(const key of map){
    console.log(key);//aisa karne pe pura map hi aa ja rha hai jabki mujhe individual chaiye
}
// to access individual values
for(const [key, value] of map){
    console.log(key,':-',value);
}

// object pe for of loop laga sakte hai ya nhi
// const myObject = { // showing that objects are not iterable
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for(const [ans,flag] of myObject){
//     console.log(ans,':-',flag);
// }