// Callback = a function that is passed as an argument to another function.
//              used to handle asynchronous operations:
//              1. Reading a file
//              2.  Network requests
//              3. Interacting with database

//              "Hey, When you're done, call this next."




function hello(){
    console.log("Hello!")
}

function goodBye(){
    console.log("Good Bye!")
}

// hello();
// goodBye();

// So to make it easy to understand, if we add a delay to the hello function, even though it is first on the page to run, if it is not able to complete the task by the time the page loads, the goodbye function will run first and then the hello function; making it asynchronous.
// Example of this; even with the function being called first, it doesn't run until the delayed time is completed; and is put at the end.


function hello2(callback){
    setTimeout(function () {
        console.log("Delayed Hello!");
        callback();
    }, 3000);
}


// To make sure that the goodBye function runs after the hello function, we can do a callback to the goodBye function inside the Hello function.

hello2(goodBye)



function leave(){
    
}