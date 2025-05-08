// For Loop = repeat some code a LIMITED amount of times.
// While loop is infinitely repeated. 

for(let i = 10; i >0; i-=2){
    console.log(i);
}
console.log("Happy New Year");


// inside the for loop - we can created 3 statements, i means index
// first condition is a temp counter (stands for i meaning index)
// second condition is until when are we going to continue the loop.
// third condition is how much are we increasing or decrease the index counter by.


// continue will let you skip or continue over.

for(let n = 1; n <=20; n++){
    if(n == 13){
        continue;
    }
    else{
        console.log(n);
    }
    
}

// Break will break out of the loop completely

for(let p = 1; p <=20; p++){
    if(p == 13){
        break;
    }
    else{
        console.log(p);
    }
    
}