// Variable Scope = Where a variable is recognized and accessible (local vs global)

// Local scope vs Global Scope

// let x =1;
// let x =2;
// This does not work because you cannot create a variable that is defined twice.

function function1(){
    let x =1;
    console.log(x);
}

function function2(){
    let x =2;
    console.log(x);
}

function1();
function2();

// We have the same variable for both functions, but they both run and give me two different results. Any variable defined in a function has a local scope; meaning that it is only defined in the function and will not work outside of the function. Or anytime you define a variable within curly braces.

// Functions cannot see within other functions. Therefore, you cannot usee one functions variable in another function.

// A global scope is any variable that is defined outside of a function.

let i = 1;
let p = 2;

function function3(){
    console.log(p, i);
}

function function4(){
    console.log(i,p);
}

function3();
function4();

// in large programs it is recommended that you don't have global variables, because it can create naming issues. Instead created them in functions.

// If we have both local and global functions with the same name and a function is used to invoke that variable, then the variable that is local (inside) the function will be used.