// This is for the temp conversion

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const temp = document.getElementById("temp");
const output_temp = document.getElementById("output_temp");
const submit_temp = document.getElementById("submit_temp");


submit_temp.onclick = function(){
    if(celsius.checked && Number(temp.value)){
       C_temp = ((Number(temp.value)-32) *(5/9))
       output_temp.textContent=`That is ${ C_temp} Degrees Celsius`;
       console.log(`${temp.value} was converted from fahrenheit to ${C_temp} degrees celsius`);
}
    // Celsius if 0 
    else if(celsius.checked && Number(temp.value)=== 0){
        C_temp = ((Number(temp.value)-32) *(5/9))
       output_temp.textContent=`That is ${ C_temp} Degrees Celsius`;
       console.log(`0 was converted from fahrenheit to ${C_temp} degrees celsius`);
    }

    else if (fahrenheit.checked && Number(temp.value)){
        F_temp= ((Number(temp.value) * (9/5))+32)
        output_temp.textContent=`That is ${ F_temp} Degrees Fahrenheit`;
       console.log(`${temp.value} was converted from Celsius to ${F_temp} degrees fahrenheit`);
}
    // fahrenheit if 0
    else if(fahrenheit.checked && Number(temp.value) === 0){
        F_temp= ((Number(temp.value) * (9/5))+32)
       output_temp.textContent=`That is ${F_temp} Degrees Fahrenheit`;
       console.log(`0 was converted from Celsius to ${F_temp} degrees fahrenheit`);
    }

    else if(!Number(temp.value) || !fahrenheit.checked || !celsius.checked){
    output_temp.textContent=`Please select one of the options as well as check to make sure you entered the temperature.`;
}
}

// This is for the distance conversion
const km = document.getElementById("km");
const mile = document.getElementById("mile");
const distance = document.getElementById("distance");
const output_distance = document.getElementById("output_distance");
const submit_distance = document.getElementById("submit_distance");

submit_distance.onclick = function(){
    if (km.checked && Number(distance.value)){
        kms = ((Number(distance.value) *  1.60934))
        output_distance.textContent = `${distance.value} miles is ${kms} in Kilometer`;
        console.log(`${distance.value} miles is ${kms} in Kilometer`);
    }

    // if kms is 0
    else if(km.checked && Number(distance.value) === 0){
        kms = ((Number(distance.value) *  1.60934))
        output_distance.textContent = `0 miles is ${kms} in Kilometer`;
        console.log(`0 miles is ${kms} in Kilometer`);
    }

    else if (mile.checked && Number(distance.value)){
       miles = ((Number(distance.value) /  1.60934))
       output_distance.textContent = `${distance.value} Kilometers is ${miles} in Miles`;
      console.log(`${distance.value} Kilometers is ${miles} in miles`);
    }

    // If miles is 0
        else if (mile.checked && Number(distance.value) === 0){
       miles = ((Number(distance.value) /  1.60934))
       output_distance.textContent = `0 Kilometers is ${miles} in Miles`;
      console.log(`0 Kilometers is ${miles} in miles`);
    }

    else if(!Number(distance.value) || !km.checked || !mile.checked){
        output_distance.textContent = `Please select one of the options as well as check to make sure you entered the distance.`

    }
}

// This is for weight
const kgs = document.getElementById("kgs");
const lbs = document.getElementById("lbs");
const weight = document.getElementById("weight");
const output_weight = document.getElementById("output_weight");
const submit_weight = document.getElementById("submit_weight");

submit_weight.onclick = function(){
    if (kgs.checked && Number(weight.value)){
        kg = ((Number(weight.value) /  2.205))
        output_weight.textContent = `${weight.value} in pounds is ${kg} in Kilograms`;
        console.log(`${weight.value} in pounds is ${kg} in Kilograms`);
    }

    // if lbs is 0
    else if (kgs.checked && Number(weight.value) === 0){
        kg = ((Number(weight.value) /  2.205))
        output_weight.textContent = `0 in pounds is ${kg} in Kilograms`;
        console.log(`0 in pounds is ${kg} in Kilograms`);
    }

        else if (lbs.checked && Number(weight.value)){
        lb = ((Number(weight.value) *  2.205))
        output_weight.textContent = `${weight.value} in kilograms is ${lb} in Pounds`;
        console.log(`${weight.value} in kilograms is ${lb} in Pounds`);
    }
        // if kg is 0
        else if (lbs.checked && Number(weight.value) === 0){
        lb = ((Number(weight.value) *  2.205))
        output_weight.textContent = `0 in kilograms is ${lb} in Pounds`;
        console.log(`0 in kilograms is ${lb} in Pounds`);
    }

        else if(!Number(weight.value) || !kgs.checked || !lbs.checked){
        output_weight.textContent = `Please select one of the options as well as check to make sure you entered the distance.`

    }

}