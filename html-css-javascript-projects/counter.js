let counter = 0;

document.getElementById("inc").onclick = function(){
   document.getElementById("cc").value;
   cc = Number(counter);
   counter = counter+1;
   document.getElementById("cc").textContent = `${counter}`;
   console.log(counter);
}

document.getElementById("dec").onclick = function(){
    document.getElementById("cc").value;
    cc = Number(counter);
    counter = counter-1;
    document.getElementById("cc").textContent = `${counter}`;
    console.log(counter);   
 }

 document.getElementById("clear").onclick = function(){
    document.getElementById("cc").value;
    cc = Number(counter);
    counter = 0;
    document.getElementById("cc").textContent = `${counter}`;
    console.log(counter);
 }
