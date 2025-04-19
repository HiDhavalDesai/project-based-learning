// let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("generate").onclick = function(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").textContent = randomNumber;
        console.log(randomNumber);
}


document.getElementById("diceroll").onclick = function(){
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").textContent = diceRoll;
        console.log(diceRoll);
}



// video way

/*

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max- min)) +min;

What this code is doing is, getting the max number removing the min numbers and then creates a range from min to max

round down(100 - 50) +50
        (50) +50

        starting range of 50 to 100

*/