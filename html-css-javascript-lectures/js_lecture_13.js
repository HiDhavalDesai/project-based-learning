// Switches - can be efficient replacement to many else if statements.
// instead of using else, else-if for day, we are able to use switch and case.
// instead of doing else if  day = 2


let day = 1;

switch(day){
    case 1: 
        console.log("It is Sunday");
        break;
    case 2: 
        console.log("It is Monday");
        break;
    case 3: 
        console.log("It is Tuesday");
        break;
    case 4: 
        console.log("It is Wednesday");
        break;
    case 5: 
        console.log("It is Thursday");
        break;
    case 6: 
        console.log("It is Friday");
        break;
    case 7: 
        console.log("It is Saturday");
        break;
    default:
        console.log(`${day} is not a day`);
}

// If there are no cases, it breaks out of the switch; you can also set a default case.
// The reason for the break statements; is so that we can break out of the switch case.
// If we don't add the beaks, we would just all the cases running/displaying.

const numberGrade = document.getElementById('grade');
const calculate = document.getElementById('calculate');
const letterGrade = document.getElementById('result');


calculate.onclick = function(){
    
    switch(true){
        case Number(numberGrade.value) >= 90 && Number(numberGrade.value) < 100 :
            letterGrade.textContent = `You grade is an A`;
            break;
        
        case Number(numberGrade.value) >= 80 && Number(numberGrade.value) < 89 :
            letterGrade.textContent = `You grade is an B`;
            break;

        case Number(numberGrade.value) >= 70 && Number(numberGrade.value) < 79 :
            letterGrade.textContent = `You grade is an C`;
            break;
            
        case Number(numberGrade.value) >= 60 && Number(numberGrade.value) < 69 :
            letterGrade.textContent = `You grade is an D`;
            break;

        case Number(numberGrade.value) < 59:
                letterGrade.textContent = `You grade is an F`;
                break;

        default:
            letterGrade.textContent = `Please enter a number grade to convert to a letter`;
    }
}

// For this switch case we use true, so that we can determine which case is true and then we run that case. 
// switch true means that run the first true case, switch false means run the first false case