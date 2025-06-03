// Rest Parameters = (...rest) allows a function work with a variable number of arguments by bundling them into an array.
//                  similar to spread = expands an array into separates elements
//                  rest = bundles separates elements into an array. (It does the opposite of spread)


function OpenFridge(...foods){
    console.log(foods);
}
// by adding 3 dots at the beginning of the

const food1 = "pizza";
const food2 = "pasta";
const food3 = "tacos";
const food4 = "sushi";
// we are first creating the variables, then we create the function on top.

OpenFridge(food1,food2,food3,food4);