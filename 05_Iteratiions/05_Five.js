// for each loop
const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (item) {
    console.log(item);
})

// using arrow function in place of function
coding.forEach((item) => {
    console.log(item);
})

// kya mai pehle se bane banae function ko pass kar sakta hu
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// jab ek se jada arguments ho for each loop me to
coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})

//  jab hamare paas array me bhut sare objects ho to we are learningg iteration on them
const myCoding = [
    {
        languagename : "javascript",
        languageFilename : "js"
    },
    {
        languagename : "java",
        languageFilename : "java"
    },
    {
        languagename : "python",
        languageFilename : "py"
    },
]
// iterating on them using for each loop
myCoding.forEach( (item)=> {
// ab hamne objecct ko item naam diya hai uski proprty ko aise fetch krenge
console.log(item.languageFilename)
})