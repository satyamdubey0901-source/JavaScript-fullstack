// let a = 10
// const b=20
// var c= 30

// console.log(a); // 10
// console.log(b)//20
// console.log(c);//30

// lets see the problem of using var 
if(true){
    let a=10
    const b=20
    var c=90
}
console.log(c); // giving 90 which should not happen 


let a=100 // ye global scope me definedd hai so iski value hi dekhigi bahar
if(true){
   let a=10
}
console.log(a)

// Nested Scope
function one(){
    const username= "Satyam"
    function two(){  // function declare
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) gives error that website is not defined
    two()   // function call
}
one()

// nesting in if-else
if(true){
    const username = "satyam"
    if(username==="satyam"){
        const website= " youtube"
        console.log(username + website);
    }
}

//    Interesting - function kitne tra se bante hue dikhenge
//console.log(addOne(5)) // chahe yha likho ya neeche likho
  function addOne(num){
   return num+1
  }
  console.log(addOne(5))

  // isi ko karne ka second method
  // yha pe console.log(addTwo(5)) likhoge to access nhi kar paoge
  const addTwo=function (num){
    return num+2
  }
  console.log(addTwo(5))