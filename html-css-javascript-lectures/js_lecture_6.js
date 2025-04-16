// Const = a variable that can't be changed.  - This is sort for constant, and it doesn't change.

// Creating a program to find the circumference on a circle given a radius.


const PI = 3.14159;
let radius;
let circumference;

// pi = 123;
// The constant variable is something that doesn't change, so pi is something that we don't want to change, so we can use const for pi. Even with this change to the variable, it doesn't change. It's good practice to make the const variable all capital; it's mainly done for only primitive data types like numbers and booleans; strings do not follow this.

// Javascript doesn't allow use to change a const, gives a typeerror

document.getElementById("calc").onclick = function(){
    radius = document.getElementById("rad").value;
        circumference = 2*PI*radius;
            document.getElementById("answer").textContent = `The Circumference is ${circumference}`;
}

// The above code was used to display the code in the html page.

// The below is used with a window prompt

const PIE = 3.14159;
let r;
let c;

r = window.prompt('Enter the radius: ');
c = 2*PIE*r;
console.log(c);


