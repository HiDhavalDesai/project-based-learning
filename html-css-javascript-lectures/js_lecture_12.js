// Ternary Operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                  condition ? codeIfTrue: CodeIfFalse;

let age = 17;

let message = age >= 18 ? "You're an Adult": "You're a minor";
console.log(message)


// This is the same as below.
/*

let message;
if (age>= 18){
    message = "You're an Adult";
}
else {
    message = "You're an minor";
}

*/

let time = 9;
let greeting = time <12 ? "Good Morning": "Good Afternoon";
console.log(greeting);


let isStudent = false;
let status = isStudent ? "You are a student": "You are not a student";
console.log(status);
// With booleans you can just write the variable.


let purchaseAmt = 125;
let discountStatus = purchaseAmt >=100 ? "You get a 10% discount":"No discount";
console.log(discountStatus)
    if (purchaseAmt >=100){
        let discountAmt =  purchaseAmt *.10;
        let newAmt = purchaseAmt - discountAmt;
        console.log(`$${newAmt} is your new total`)
    }
else{

}