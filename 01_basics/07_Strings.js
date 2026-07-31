const name = "Satyam"
const repoCount = 50

console.log(name + repoCount+ "value");
// but this method of cancatination is very outdated

// New one 
console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

// Another eway to define string 
const gameName= new String('hitesh-hc-com')
console.log(gameName[0]);

console.log(gameName.__proto__); // we will get object by that and hum inke components 
//bhi access kar sakte hai
console.log(gameName.length);// to get the  length of gamename
console.log(gameName.toUpperCase()); //but iski original value change nhi hui hai

console.log(gameName.charAt('2'));// gameName ke second index pe kya hai 

// agar mujhe ye pta karna ho ki 'h' kis position pe hai to
console.log(gameName.indexOf('h'));

// string ki slicing kar rhe hai 0 se lekar 4th index tak making substring
const newString= gameName.substring(0,4)// you can not give -ve values to it
console.log(newString);//4th index ki value excluded rehti hai

const anotherString=gameName.slice(-8,4)// isme hum -ve value bhi de sakte hai 
console.log(anotherString);//reverse se starrt hoga

// Now lets study Trim and Replace
const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'))// %20 ko dhundo and replace akro usko with -

// if we want to find whetherr something is present in url or not
console.log(url.includes('hitesh'))

// I want ki mera name hitesh-hc-com ye arrays me breakdown ho jaye on the basis of '-'
console.log(gameName.split('-'));