// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB connected`)
}
chai();

// We want ki hamra data global se pollute or change na ho tab
// hame ye pta hai ki parenthesis lagane se cheeje kaam karne lagti hai
//  lets use IIFE
(function chai(){   // this is  named IIFI
    console.log(`DB connected`)
})(); //yha semicolon lagana jaruri hai
// kai baar hum IIFE function ko invoke to kar dete hai par use btana bhi hota hai ki kha 
// rukna hai by ;

// can we write the above function  in form of arrow function
//  ( () => {} )()

     ( (name) => {   // THis is unknown IIFI
        console.log(`DB CONNECTED Two $(name)`);
     } )('satyam')
     // satyam wle bracket me hum input denge
    