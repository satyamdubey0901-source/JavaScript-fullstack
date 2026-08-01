const marvelHeros=["thor","ironman","spiderman"];
const dcHeros=["superman","batman","flash"];

//marvelHeros.push(dcHeros);// This will add the entire dcHeros array as a single element to marvelHeros
//console.log(marvelHeros[5][1]);

const allHeros=marvelHeros.concat(dcHeros);//similar as push but ek naya array bna deta hai
console.log(allHeros);

// spread - ek glass jammen pe giraya and vo spread ho gya
const all_newHeros=[...marvelHeros,...dcHeros];
console.log(all_newHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];//array ke andar array ke andar array
const real_anoterArray=anotherArray.flat(Infinity);//flat method se hum array ke andar ke array ko 
// remove krke ek single array me convert kr skte hai
console.log(real_anoterArray);

// kai baar hame pta nhi hota ki given cheej array hai ya nhi so we use isArray
console.log(Array.isArray("Hitesh"))
// Ab pta chal gya ki array nhi hai to array kaise banae
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))// yha hamne key value pair de diya hai to ye smaj 
// nhi paega ki array kiska banana hai key ka ya value ka so now it gives []empty array


// convert them into array
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))// ye score1,score2,score3 ko array me convert kr dega