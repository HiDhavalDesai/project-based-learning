// Logical Operators = Used to combine or manipulate boolean values (true or false)
//  AND = &&
//  OR  = ||
//  NOT = ! - will change true to false & false to true



const temp = 60;

if (temp > 0 && temp <= 50){
    console.log("The weather is good");
}
else if(temp >= 75 || temp <= 100){
    console.log("It's too hot!");
}
else{
    console.log("The weather is BAD");
}


const isSunday = true;

if(!isSunday){
    console.log("It's Sunday");
}
else{
    console.log("It's Not Sunday");
}



// MY temp program & temp converter


document.getElementById("submit").onclick = function(){
    let tempinC = document.getElementById("tempinC").value;
    let tempinF = (tempinC *(9/5)) +32;
    document.getElementById("output").textContent = `${tempinF} Degrees F`;
}




