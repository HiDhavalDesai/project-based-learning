// If Statements =  If a condition is true, execute some code, if not, don something else.

let age1 = 25;

if (age1 >= 18){
    console.log("You are old enough to enter this site.");
}
else{
    console.log("You must be 18+ to enter this site.")
}

// using age again on bottom, so commenting this out.


let time = 13;

if(time <12){
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon!");
}

// Conditions work well with boolean variables.

let isStudent = true;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}

// Nested If-Statements

let age2 = 18;
let hasLicense = false;

if (age2 >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet!");
    }
} 
else{
    console.log("You must be 16+ to have a license");
}

// If age2 is false, then we skip over everything after the age2 >= 16 check.
// if the age2 is true, the hasLicense will run


// Else-if

let age3 = 0;

if(age3 >= 100){
    console.log("You are too old to enter this site");
}
else if(age3 == 0){
    console.log("You can't enter. You were just born");
}

else if(age3 >=18){
    console.log("You are old enough to enter this site");
}
else if(age3 < 0){
    console.log("You age can't be below 0.");
}
else{
    console.log("You must be 18+ to enter this site");
}

// The order of the else if statements does matter ; once a close is accepted then you skip over all the other ones.
// if two values are equal then you have to use comparison operators (==). One equal sign(=) is a assignment operator.

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age_4;


mySubmit.onclick = function(){
    age_4 = myText.value;
    age_4 = Number(age_4);
    
    if(age_4 >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age_4 == 0){
        resultElement.textContent = `You can't enter, you were just born`;
    }
    
    else if(age_4 >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age_4 < 0){
        resultElement.textContent = `You age can't be below 0.`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
    
}