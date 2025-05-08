// While loop = repeat some code WHILE some condition is true.

const username = document.getElementById("username");
const greeting = document.getElementById("greeting");
const submit = document.getElementById("submit");

submit.onclick = function(){
    greeting.textContent = `Hello ${username.value}`
}



/*

  if(username.value === "" || username.value === null || username === " "){
        greeting.textContent = `Please Enter a username`
    }

    while(username.value === "" || username.value === null || username === " "){
            greeting.textContent = `Please enter a username`
    }
*/



let name_1 = "";

while (name_1 === "" || name_1 === null ){
    name_1 = window.prompt("enter your name");
}

console.log(`Hello  ${name_1}`);

// If we press cancel on the prompt, we get null, meaning no value.



// This is a do-while-loop

let name_2 = "";

do{
    name_2 = window.prompt("enter your name_2");
} while (name_2 === "" || name_2 === null )

    console.log(`Hello  ${name_2}`);



// Another exercise

let loggedIn = false;
let username_1;
let password;

do{
    username_1 = window.prompt("Enter Login Username:");
    password = window.prompt("Enter Your password");

    if(username_1 === "username" && password === "pass"){
        loggedIn = true;
        console.log("You are logged In!")
    }
    else{
        console.log("Invalid! Please try again.")
    }
}while(!loggedIn)

    // The do-while-loop is very useful if we still need to validate something; this way it still requires that the username and password still be entered