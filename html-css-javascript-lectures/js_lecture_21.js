// This is a console number guessing game.
// This game will tell you if your guess is greater or less than the number.

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;   // users input
let running = true;  // allow you to run the game, and false to stop it.

while(running){
    console.log(answer);
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}:`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter a valid Number");
    }

    else if(guess < minNum || guess > maxNum){
        window.alert(`Please Enter a valid Number between ${minNum} - ${maxNum}`);
    }

    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try Again!");
        }
        
        else if (guess > answer){
            window.alert("Too High! Try Again!");
        }

        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }

    }

}