// Arithmetic Operators = operands (values, variables, etc)
//                      Operators (+,-,*,/, %)
//                      ex. 11 = x + 5;

let student = 30;
let newstudent = 15;

// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student /2 ;
// student = student ** 2;  // exponentiation operator (power of 2)

let extrastudent = student % 4; // modulus operator (remainder of division) (gives 1)

console.log(student);
console.log(extrastudent);

// Augmented assignment operators

newstudent+=1; //16
newstudent -=6; //10
newstudent *=2; //20
newstudent /= 2; //10
newstudent **=2; //100
newstudent %=2; //0

console.log(newstudent);

// Increment and Decrement Operators
let coolstudent = 1;
coolstudent ++;  // this means coolstudent +1
coolstudent --; // this means coolstudent -1

console.log(coolstudent);

/* operator precedence
    1. Parenthesis
    2. Exponents
    3. Multiplication & Division & modulus
    4. Addition and Subtraction
        solve the equation from left to right
*/

let result = 1+2*3+4**2;
    // 1+2*3 +16
    // 1 + 6 + 16
    // 23    
console.log(result)

// Practice
let a = 12%5 +8/2;
    //   2+4
    // 6
console.log(a);

let b = 6/2**(2+5);
     // 6/2 ** (7)
     // 6/128
     // 0.046875

console.log(b);