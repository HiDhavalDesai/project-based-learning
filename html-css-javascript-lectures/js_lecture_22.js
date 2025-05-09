// Functions = a section of reusable code.
//              declare code once, use it whenever you want.
//              call the function to execute that code.


// Function functionname(){}
function happyBirthday(){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear you!");
    console.log("Happy Birthday to you!");
}

happyBirthday();
// This is how to call a function, the function name and then open-close parentheses 

// This function has two parameters that can be used, your_name and age; these are required then calling the function to run; if you mix them up, it will cause the function to have a messed up argument
function happyBirthday2(your_name,age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${your_name}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
}

// this function has two arguments; you need a matching set of parameters; if the arguments are blank, you get undefined errors.
happyBirthday2("John",25);
happyBirthday2("Adams",55);


// Return keyword
function add(x,y){
    let result = x + y;
    return result;
}
// you can also do function add(x,y){ return x + y}, this is the same as above.

let answer = add(2,3);
console.log(answer);
// What this is doing is first it adds 2 & 3 giving 5 and then replaces answer with 5. It does the equation first so result = 5, then transfers result of 5 to answer. You can also just console.log add(2,3), so the answer is not stored anywhere.


// subtract function

function sub(a,b){
    return a-b;
}

console.log(sub(5,2));

// multiply

function multi(p,m){
    return p*m;
}

console.log(multi(6,3));

// divide

function divide(o,l){
    return o/l;
}

console.log(divide(6,3));

// mod
function mod(q,w){
    return q%w;
}

console.log(divide(50,10));


// Even or odd

function isEven(z){
    if(z%2 === 0){
         return true;
    }
    else{
       return false;
    }

    // return number % 2 === 0 ? true : false;
}

console.log(isEven(11));


function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

    // return email.includes("@") ? true: false;
}

console.log(isValidEmail("Johndoe.com"))
console.log(isValidEmail("Johndoe@.com"))