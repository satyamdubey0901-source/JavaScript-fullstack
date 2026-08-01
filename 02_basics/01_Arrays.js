// Arrays
// Declare Arrays
const myArr=[0,1,2,3,4,5];// 1st way
console.log(myArr[0]);
const myHeros=["Ironman","Spiderman","Thor"];// 2nd way
console.log(myHeros[0]);
const myArr2=new Array(1,2,3,4,5);// 3rd way
console.log(myArr2[0]);

// Arrays methods

myArr.push(6)
myArr.push(7)
myArr.pop();//isme hame koi argument nhi dena padta just lst element ko remove krta hai

myArr.unshift(7);
myArr.shift();//isme hame koi argument nhi dena padta just first element ko remove krta hai
console.log(myArr)

console.log(myArr.includes(9));//koi cheej arr me present hai ya nhi ye check krta hai
console.log(myArr.indexOf(3));//koi cheej arr me present hai to uska index return krta hai
console.log(myArr.indexOf(9));//koi cheej arr me present nhi hai to -1 return krta hai


const newArr=myArr.join(",");//ye arr ke sare elements ko string me convert kr deta hai 
// aur jo argument humne diya hai uske sath join kr deta hai
console.log(newArr);
console.log(typeof newArr);//string

// slice,splice

console.log("A",myArr);//yha A bss ans me heading show krne ke liye hai

const myn1=myArr.slice(1,3);//ye arr ke elements ko copy krke new arr me dal deta hai 3 excluded
console.log(myn1);
console.log("B",myArr);// ye chck karne ke liye hai ki ab original arry kaisa hai

const myn2=myArr.splice(1,3);//ye arr ke elements ko remove krke new arr me dal deta hai
console.log("C",myArr);
console.log(myn2);
