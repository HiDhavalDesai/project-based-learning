// Spread Operator = represented by dot-dot-dot (...) which allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)


let numbers = [1,2,3,4,5];
let max = Math.max(...numbers);
// We cannot do this for an array, but we can use the spread operator.

let min = Math.min(...numbers)

console.log(max);
console.log(min);


// We can do this with strings as well.

let username = "Code God";
let letters = [...username];


console.log(letters);

// Then you can use the .join method to add things in-between the characters

let join_letters = [...username].join("-");
console.log(join_letters);


// we will create a shallow copy of this array; it's a different data structure, but contains similar values
let fruits = ["apple","orange","banana"];
let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);

// We can combine two or more array with the spread operator. Because the username is a string, it breaks it into individual letters, and since fruits is an array, it breaks each element.
let userNameFruits = [...username, ...fruits];
console.log(userNameFruits);

// Two Arrays
let veggies = ["carrot","celery","potatoes"];

let food = [...fruits, ...veggies];

// This will just list out the arrays
console.log(...fruits, ...veggies);
// This will combine the arrays
console.log(food);

// we can also append the arrays, this will display the two arrays, and then it will add eggs and milk at the end.
let food_2 = [...fruits, ...veggies,"eggs","milk"];
console.log(food_2);