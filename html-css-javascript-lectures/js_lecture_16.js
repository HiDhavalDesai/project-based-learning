// Method Chaining = Calling one method after another in one continuous Line of code.



// No Method chaining

let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
// This code will remove whitespace and then remove the first character of the username and make it uppercase

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
// This code will remove the first character of the username and turn everything into lower case

username = letter + extraChars;
console.log(username);
// Then we will combine those two letter & extracharacters, so it will display as uppercase letter and all the other characters.


//  Method Chaining

let username2 = window.prompt("Enter your username2:");

username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

console.log(username2);

// This allows you to combine all the methods together; it can be hard to read, so limit it to 2 or 3 methods