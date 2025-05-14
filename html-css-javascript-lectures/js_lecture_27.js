// Rest Parameters = (...rest) allows a function work with a variable number of arguments by bundling them into an array.
//                  similar to spread = expands an array into separates elements
//                  rest = bundles separates elements into an array.


function openFridge(...foods){
    console.log(foods);
}
// foods is creating a new variable for all the food items, so when I call the array of food(1-4), it will list all the foods in an array.
// Then you can use rest parameters, so that you can turn the entire thing into a list of strings, instead of an array.


const food1 = "pizza";
const food2 = "pasta";
const food3 = "tacos";
const food4 = "mash potatoes";
const food5 = "Ramen";

openFridge(food1,food2,food3,food4,food5);