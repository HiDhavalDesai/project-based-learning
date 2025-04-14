// How to accept user input
//  1. window prompt
//  2. html textbox

let username;
username = window.prompt("What's your username: ");
console.log(username);

// A better way to do this is declare and assign.
let name = window.prompt("What is your name?");
console.log(`You username is: ${username} and your name is: ${name}`);


// HTML textbox input
let email;

document.getElementById("mySubmit").onclick = function(){
    email = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome, ${username} of ${name} and your email is: ${email}`;
    // console.log(email);
    // Instead of console.log the email, we will change the h1 element

}



