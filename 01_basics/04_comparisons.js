// en sabme koi dikat nhi hai same type ke hai
console.log(2>1)// very simple ans of all of them whether true or false
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

// problem arises when you compare two different datatypes
console.log("2">1);
console.log("02">1);

//problems kuch special (avoid using them )
console.log(null>0);
console.log(null==0);
console.log(null>=0);// giving unpredictable result as true

console.log(undefined==0);
console.log(undefined>0);

// lets see difference b/w double and strict check
console.log("2"==2);
console.log("2"===2);
