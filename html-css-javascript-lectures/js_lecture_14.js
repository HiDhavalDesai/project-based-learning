// String Method =  allow you to manipulate and work with text (strings)

let username = 'DonkeyKong';

console.log(username.charAt(0));
// by adding . we are accessing any properties or methods that the sting has.
// .charAt() = First Character of string; the first character number is 0, the second number is  1. The third character number would be 2.


// .indexOf() will return the first occurrence of a character. The first time that character is used in the variable.
console.log(username.indexOf("g"));

// .lastIndexOf() = this will give you the last occurrence of a character. When does this character occur last?
console.log(username.lastIndexOf("n"));

// .length = this will give you the length of the string. This will start with 1 and give you a total count.
console.log(username.length);

// .trim = This will trim the string; when trim() is like this it removes the white space before and after the word
console.log(username.trim());

// .toUpperCase() =  This will make the string all uppercase.
console.log(username.toUpperCase());

// .toLowerCase() = This will make the string lowercase.
console.log(username.toLowerCase());


// .repeat() = repeat the string, and in the parentheses you add the number of time you want to repeat it.
console.log(username.repeat(5));


// .startsWith() = to determine if a string starts with a specific character; this will give you a boolean (True or False)
console.log(username.startsWith("O"));

// .endsWith() = to determine if a string ends with a specific character
console.log(username.endsWith("g"));

// .includes() = does the string include this character; true or false
console.log(username.includes(" "));


let phoneNumber = "123-456-7890";

// .replaceAll() - we can use this to replace all the "-" in the string. First we have to say which one we want to replace, and then a comma, and what we are replacing it with.
console.log(phoneNumber.replaceAll('-',''));

// .padStart() - This gives you a way to pad the start of the string, the first number means how many total characters, then the second is what we are padding it with
console.log(phoneNumber.padStart(15,'*'));
// So for this case, we are adding * to the front of the phone number, and including the phone number in the total count of the string, so 15- phone number = 3, so 3 stars are added, the '-' count as part of the string.

// .padEnd() - This will pad the ending of the string.
console.log(phoneNumber.padEnd(15,'*'));