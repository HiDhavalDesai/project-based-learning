// Rest Parameters = (...rest) allows a function work with a variable number of arguments by bundling them into an array.
//                  similar to spread = expands an array into separates elements
//                  rest = bundles separates elements into an array. (It does the opposite of spread, combines each element into one array)


function OpenFridge(...foods){
    console.log(foods);
}
// This function has a variable named foods, this variable is used to combine food1 to food4; which makes food an array

// by adding 3 dots at the beginning, we can bring all the variables together.

const food1 = "pizza";
const food2 = "pasta";
const food3 = "tacos";
const food4 = "sushi";
const food5 = "ramen";
// we are first creating the variables, then we create the function on top.

OpenFridge(food1,food2,food3,food4,food5);
// Therefore, when we run the function OpenFridge and add all the foods(1-4), we get a list of all the foods.

// we are able to give the openfridge function as many arguments we like, and it will display them in a list.



// creating a second function - openfridge2; this is different from openfridge because the first one will make foods into an array; the second one will just display the elements of foods without it being in an array.
function OpenFridge2(...foods2){
    console.log(...foods2);
}

OpenFridge2(food1,food2,food3,food4,food5);


// This is another function is to stick all elements in an array.
function getFood(...foods3){
return foods3;
}


const foods3 = getFood(...food1,food2,food3,food4,food5);
console.log(foods3)


// spread and rest are very similar so you have to be very careful of them and how you use them; if you want to spread, break up the array or even the element into individual letters, then you can do ...variable, and to bundle them together you do the same thing, but in a function to combine them into an array.

// This is for a grand total of numbers added to the array
function sum(...numbers){

        let result = 0;
            for(let number of numbers){
                result += number;
            }
            return result;
}

const total = sum(1,2,3,4,5)

console.log(`Your Total is ${total}`);


// This is an average

function getAverage(...Numbers2){
    let average_Result = 0;
    for(let Number2 of Numbers2){
        average_Result += Number2;
    }
        return average_Result / Numbers2.length;
}

const average_Total = getAverage(75,100,50,5);
console.log(`The average is ${average_Total}`);


// Using rest parameter to combine strings together.

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Spongebob","Squarepants","III");

console.log(fullName)