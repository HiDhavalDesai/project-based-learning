// This is the number guessing game.

const minNumber = 1;
const maxNumber = 100;

const number = document.getElementById("number");
const guess = document.getElementById("guess");
const reset = document.getElementById("reset");
const quote = document.getElementById("quote");


let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log(randomNumber);
