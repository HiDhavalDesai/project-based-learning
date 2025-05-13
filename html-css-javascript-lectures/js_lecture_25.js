// Array = a variable like structure that can hold more than 1 value.

let fruits = ["apple","banana","grape"];
// By just adding straight brackets, we turn the variable fruit into an array; you just need to separate them with a comma; if it's an array, you should make the variable plural; placements start at 0

console.log(fruits);
// This will print out all the fruits in the array, but also provides the places for each fruit (0 - apple, 1 -banana, 2 - grape) If you just want one of the fruits, you need to include it with [#] straight brackets and a number, see below

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);   // This will give undefined because there is nothing in the 3rd place of the array.


// You can change any of the elements in the array, by calling the variable, and then calling the place. You can also add an element to that array by calling another place.
fruits[2] = "strawberry";
console.log(fruits);
// This changed grape to strawberry.

// To add an element to an array, you can use .push() method.
fruits.push("coconut");
console.log(fruits);

// .pop() method will remove the last element.
fruits.pop();
console.log(fruits);

// .unshift() method will add an element to the beginning of the array.
fruits.unshift("Pizza");
console.log(fruits);

// .shift() method will remove an element from the beginning of the array.
fruits.shift();
console.log(fruits);

// To get the length of an array, you can use the length method.

let numOfFruits = fruits.length;
console.log(numOfFruits);

// find index; number placement of an element; if element is in the array, it will provide you with a number from 0 to x, however, if it's not in the array, it will give you a -1.
let index = fruits.indexOf("strawberry");
console.log(index);


// Creating a for-loop to display all elements in array; there are three statements, we need an index, then length of the loop and how many we increment by.

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// For a reverse iteration of the array; we do -1 because we don't want the last element, which is always going to be undefined.
for(let i = fruits.length-1; i >=0 ; i--){
    console.log(fruits[i]);
}

// enhanced for-loop; short-cut to display elements in array. The variable fruit is used to defined a single fruit
for (let fruit of fruits){
    console.log(fruit);
}

// sorting an array; This will sort them in alphabetical order.
fruits.sort();
console.log(fruits);


// sorting in reverse order
fruits.sort().reverse();
console.log(fruits);
