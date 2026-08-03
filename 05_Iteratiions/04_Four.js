// how to apply loops on objects
const myObject = {
    js: 'JavaScript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}
// use of for in loop for that
for(const key in myObject){
   // console.log(key);// sirf key de rha hai
   // console.log(myObject[key]); // values de rha hai bss
    console.log(`${key} shortcut is for ${myObject[key]}`); // gives full correct ans

}

// can we use for in loop for arrays
const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(key); gives 0 1 2 3 4
    console.log(programming[key]);
}

// can we use for in loop for maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for(const ans in map){
   // console.log(key); // gives nothing
}