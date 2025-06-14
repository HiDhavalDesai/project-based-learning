// Random Password Generator

function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*()_+{}|\:;<.,>?/-. ";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

        if(length <= 0){
            return `(Password Length must be at least 12 characters)`;
        }

        if(allowedChars.length === 0){
            return `(At least 1 set of characters need to be selected)`;
        }

        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated Password: ${password}`)