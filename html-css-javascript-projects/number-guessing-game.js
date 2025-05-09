// This is the number guessing game.

const minNumber = 1;   //Min number
const maxNumber = 100;  // max number

const number = document.getElementById("number");  // guessed number
const guess = document.getElementById("guess");   // submit button
const reset = document.getElementById("reset");   // try again button
const quote = document.getElementById("quote");   // message to display
const attempt_made = document.getElementById("attempt_made");   // attempt count

let run_game = true;   // runs the game
let reset_game = false;   // allows you to reset the game
let attempt = 3;   // attempts allowed 

 let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
        console.log(randomNumber);

      while(run_game && attempt >= 1){
        attempt_made.textContent = `Tries Left: ${attempt}`;

            guess.onclick = function(){
                 if (Number(number.value) === "" || Number(number.value) === " " || Number(number.value) === 0 && attempt >=1 && attempt > 1){
                    attempt--;
                    attempt_made.textContent = `Tries Left: ${attempt}`;
                        if(attempt <= 0){
                            attempt = 0;
                            quote.textContent = `The correct number is ${randomNumber}. Please reset to try again.`;
                        }
                        else{
                    quote.textContent = `Please Enter a Valid Number that is greater than 0.`;
                        }
                 }

                 else if (Number(number.value) !== randomNumber && attempt >= 0 && attempt > 0){
                        attempt--;
                        attempt_made.textContent = `Tries Left: ${attempt}`;
                            if(attempt <= 0){
                            attempt = 0;
                            quote.textContent = `The correct number is ${randomNumber}. Please reset to try again.`;
                             }
                            else{
                            quote.textContent = `${number.value} is not correct. Please Try again.`;
                            }
                }
                
                else if(Number(number.value) === randomNumber && attempt >= 0 && attempt > 0){
                    quote.textContent = `WINNER!! ${number.value} is the correct number. Please play again.`;
                }
                
}
     run_game = false;  
}

        reset.onclick = function(){
           location.reload()
        }
    
