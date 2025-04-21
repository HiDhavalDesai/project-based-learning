// .checked = property that determines that checked state of an html checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const americanBtn = document.getElementById("americanBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if (myCheckBox.checked){
        subResult.textContent = `You are subscribe!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed.`;
    }

    // checking payments now
    if (visaBtn.checked){
        paymentResult.textContent = `You paying with Visa`;
    }
    
    else if (masterBtn.checked){
        paymentResult.textContent = `You paying with MasterCard`;
    }

    else if (americanBtn.checked){
        paymentResult.textContent = `You paying with American Express Card`;
    }

    else if (paypalBtn.checked){
        paymentResult.textContent = `You paying with PayPal`;
    }

    else{
        paymentResult.textContent = `Please choose a payment method.`;
    }

}