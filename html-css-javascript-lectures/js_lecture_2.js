/* 
Variables =  A container that stores a value.
             Behaves as if it were the value it contains.

             1. declaration   let x;
             2. assignment     x = 100;
             
*/

let x; // declaration
let y = 350; // declaration and assignment
x = 100;// assignment
console.log(x + y);
// This will display 450

// We cannot declare a variable with the same name in the same scope

// Different data types.
// Numbers
let age = 25; 
let price = 10.00;
let gpa = 2.1;

console.log(age); // 25
console.log(price); // 10.99
console.log(gpa); // 2.1
console.log(typeof age);

// sentence using the variables.
console.log(`You are ${age} years old and you paid $${price} for a ${gpa} GPA!`);
// Template literals allow us to use variables inside strings.

// Strings - just characters / text, and can not be used in math operations.
let firstName = "John";
let favoriteFood = "Tacos";
let email = "123@gmail.com"

console.log(typeof firstName);
console.log(firstName);
console.log(favoriteFood);

// Template literals - a way to create strings that can contain variables and expressions.
console.log(`Hello ${firstName}, How are you doing today?, did you enjoy the ${favoriteFood}, I made?`);
console.log(`Your email is: ${email}`);


// Booleans - true or false values; used as flags to indicate if something is true or false. We generally use them in conditional statements.
let online = true;
let forSale = false;
let isStudent = true;
console.log(typeof online); // boolean
console.log(`You are ${online}`);
console.log(`Is the item for sale?: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);


// We will display this on the webpage.
let fullName = "John Doe";
let yearOld = "99";
let inSchool = true;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = yearOld;
document.getElementById("p3").textContent = inSchool;

// adding these variables to a sentence on webpage.
document.getElementById("p4").textContent = `Your name is ${fullName}, you are ${yearOld} and you are currently in school: ${inSchool}`;