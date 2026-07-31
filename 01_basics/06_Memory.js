let myYoutubename="satyamdubey"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
// yha pe primitive ka case chal rha hai islea copy me change aayega original whi rahega

// Non-primitive case like object isme heap memory use hoti hai
let userOne={
    email:"satyamdubey@google.com",
    upi:"user@ybl"
}

let userTwo= userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email) // ab dono ka ans same hi aayega kyuki reference diya gya hai
