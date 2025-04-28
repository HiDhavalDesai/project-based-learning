//  String Slicing = creating a substring from a portion of another string
//                  string.slice(start,end)

const fullName = "John Doe";

let firName = fullName.slice(0,4);
// ending index is exclusive, therefore we are starting at 1 instead of the normal 0.

// let lasName = fullName.slice(5,8); -->  Result was Doe
// we can also remove the ending index and it should give us the same result.
let lasName = fullName.slice(5);


// Get the first character of the string
let firChar = fullName.slice(0,1);
let lasChar = fullName.slice(-8);
// When using a negative number, you will start the string at the end. so -1 will be e; -8 will display the fullName.


console.log(firName);
console.log(lasName);
console.log(firChar);
console.log(lasChar);

// Break the fullName into two strings

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
// +1 will allow me to move to the position after the space.

console.log(firstName);
console.log(lastName);


// exercise for email.

const email = "CoolGuy123@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(userName);
console.log(extension);