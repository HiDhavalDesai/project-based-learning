// Type conversion =  change the datatype of a value to another (string, number, boolean)
//When we accept a user input, it is automatically a string, so we can convert it, to either a boolean or a number.

let age = window.prompt('How old are you?');
let rank = window.prompt('What is your rank?');
age = Number(age); // this converts the string to a number
age+=1;  // age is a string here, so it adds the one to the end of the string, and does not add it.
console.log(age, typeof age);

rank++;  // this makes it so rank becomes a number
console.log(rank, typeof rank); // this will show the type of rank, which is a number

rankNAge = age + rank;
console.log(rankNAge, typeof rankNAge); // This variable doesn't work because age is a string and rank is a number, so you cannot add them together; once we convert age to a number, then it works.33


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // This will give an error (NaN error; this means not a number)
y = String(y); // This will do nothing, but print pizza.
z = Boolean(z); // THis will write true.

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// replacing pizza with 0

let xc = "0";
let yc = "0";
let zc = "0";

xc = Number(xc);  //0 can be changed to a number
yc = String(yc); // 0 can be a string
zc = Boolean(zc); // 0 can be true.

console.log(xc, typeof xc);
console.log(yc, typeof yc);
console.log(zc, typeof zc);


// replacing 0 with empty strings

let xca = "";
let yca = "";
let zca = "";

xca = Number(xca);  //answer will be null  ----> this gave 0 as a number, not null.
yca = String(yca); // will be an empty string
zca = Boolean(zca); // will be false; we want to do this specifically, to see if the user input is empty and give an error.

console.log(xca, typeof xca);
console.log(yca, typeof yca);
console.log(zca, typeof zca);


// a variable that is not assigned a value

let qwe1;
let qwe2;
let qwe3;

qwe1 = Number(qwe1);  // This will gives a Nan error.  
qwe2 = String(qwe2); // This will give a empty space.   ---> undefined string
qwe3 = Boolean(qwe3);  // This will give false.
// This is a good way to check if the user input is empty or not, and give an error.

console.log(qwe1, typeof qwe1);
console.log(qwe2, typeof qwe2);
console.log(qwe3, typeof qwe3);
