// Counter Program

const DECREASEBTN = document.getElementById("decreaseBt");
const RESETBTN = document.getElementById("reset");
const INCREASEBTN = document.getElementById("increaseBt");
const countlabel = document.getElementById("countLabel");

let count = 0;

INCREASEBTN.onclick = function(){
    count++;
    countlabel.textContent = count;
}

DECREASEBTN.onclick = function(){
    count--;
    countlabel.textContent = count;
}

RESETBTN.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}