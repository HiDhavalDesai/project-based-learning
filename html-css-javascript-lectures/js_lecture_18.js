/*
 = is an assignment operator
 == is a comparison operator (compare if value are equal)
 === strict equality operator (compare if values & datatypes are equal)
 != is inequality operator
  !== is a strict inequality operator

*/

const PI = 3.14;
// assignment operator

if (PI !== "3.14"){
    console.log("That is NOT PI");
}
else{
    console.log("That is PI")
}

// The first = is used to assign the word PI to a floating number 3.14.
// The second == is used to compare the variable PI to a string; which ends up being true; because it's not checking the datatype. We are only checking to see if the values are equal.
// Third ===, if 3 equal signs are used; then the statement is false, because we compare the values as well as the datatype. However, if we are comparing the number to number(without quotes, then we have a match) and the result would be true PI === 3.14 is true, PI === "3.14" is false. When taking user input, you will need to make sure that the values match, so we would use the three equal signs.
// Fourth - the inequality operator, will return true if two values are not equal. 3.14 != 3.00 is true, so it will run the else code..
// Fifth -  !== is a inequality operator for the datatypes as well; so if we did "3.14" !== 3.14, this is false, so it will run true code.  3.14 !== 3.14 is false, so it will run else code.