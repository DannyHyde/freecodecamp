/* Below block was provided at the beginning
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
*/

// Step 1: Read blurb and go to the next step.
// Step 2: Use 'let' to declare a variable called character
// Step 3: Initialize the character variable with the value "Hello"
// Step 4: Single or double quotes work - change "Hello" to have single quotes
//let character = 'Hello';
// Step 5: Use console.log to print the value of character to the console
//console.log(character);
// Step 6: let allows for reassignment, so after the log reassign the value 'World' to character
//character = "World";
// Step 7: Now use console.log to show both strings
//console.log(character);
// Step 8: JavaScript uses camel case. Use this to declare another variable
//let secondCharacter;
// Step 10: Assign the string "Test" to second character
// Step 11: You can assign one variable to another. Do this by assigning secondCharacter to character
//secondCharacter = character; //"Test";
// Step 9: secondCharacter is 'uninitialized', use console.log to show the value of the variable.
//console.log(secondCharacter);
// Step 12: Get rid of logs and secondCharacter variable (commented for reference)
// Step 13: REVIEW - Use let to declare the given variables and initialize first, not the second
//let profession = "teacher";
//let age;
//console.log(profession);
//console.log(age);
// Step 14: Remove step 13 code (commented for reference)
// Step 15: Declare 'count' and assign it the number 8
//let count = 8;
// Step 16: We can do maths... Send 'count + 1' to the console
//console.log(count + 1);
// Step 17: Play with * - / then remove the log to move on (commented for reference)
// Step 18: Arrays - Declare a empty array variable called rows
// Step 19: Assign the strings: Naomi, Quincy and CamperChan.
//let rows = ["Naomi", "Quincy", "CamperChan"];
// Step 20: Use console.log and bracket notation to print the first value in rows
//console.log(rows[0]);
// Step 21: Update the third element of rows to be the number 10 then print rows to the console
//rows[2] = 10;
// Step 22: Update the rows[2] to dynamically access the last element in rows
// Step 23: Remove rows[rows.length - 1] (commented for ref) and previous log
//rows[rows.length -1] = 10;
// Step 24: Initialize the cities array with given strings, print to the console then change the last element and log them again
//let cities = ["London", "New York", "Mumbai"];
//console.log(cities);
//cities[cities.length -1] = "Mexico City"
//console.log(cities);
// Step 25: Remove last step (commented for more of a headache when looking at this file)
// Step 26: Use push() to add "freeCodeCamp" to the end of rows
//let rows = ["Naomi", "Quincy", "CamperChan"];
//rows.push("freeCodeCamp");
// Step 28: What does .push() do? assign it to pushed and print to the console
//let pushed = rows.push("freeCodeCamp");
//console.log(pushed);
// Step 27: Create the variable popped assign it rows.pop() then print it to the console
//let popped = rows.pop();
//console.log(popped); 
//console.log(rows);
// Step 29: Play with .push() and .pop() then remove previous steps (commented )
// Step 30: Set character to use double quotes and rows to be an empty array
// Step 31: Change let keywords to const (const stops the reassignment of variables)
// Step 32: change character to a # character rather than 'hello'
const character = "#";
const count = 8;
const rows = [];



// Step 47: Declare the function 'padRow' without any parameters
// Step 48: Add a function call after the padRow function
// Step 49: Declare a call variable and assign it with your function
// Step 52: Add name parameter to padRow
// Step 61: Remove the name parameter from padRow, remove the logs from the function and remove name from the function call
// Step 62: Remove the test declaration and the return from padRow
// Step 63: Remove the call declaration and the log below it
//function padRow(name){
function padRow(){
    // Step 51: Use the return keyword to return "Hello!"
    //return "Hello!";
    // Step 53: Change padRow to return the name parameter
    // Step 57: Amend padRow to return character and name concatenated
    // Step 58: Declare a const 'test' assign 'testing' then try to log it outside of the function (remove the log to carry on)
    //const test = "Testing";
    // Step 59: Update your return to give the value of test
    //return character + name;
    // Step 60: Add "console.log("This works!")" below the return and above to show that the return keyword stops the function
    //console.log("This works!");
    //return test;
    //console.log("This works!");
}
//console.log(test);
//padRow();
// Step 54: Pass your own name to padRow
//const call = padRow("Danny");
//const call = padRow();
// Step 50: Add a print to see the value of call
//console.log(call);

// Step 55: Declare a sum variable, assign it the value calling addTwoNumbers with 5 & 10 then log sum
// Step 56: With that review done remove step 55 code (commented)
/*function addTwoNumbers(a, b) {
    return a + b;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);*/



// Step 33: Construct a for loop with the given components "iterator", "condition", "iteration"
// Step 34: Replace "iterator" with a let variable of i with the value of 0 (let i = 0)
// Step 35: Replace "condition" with a check if i is less than count (i < count)
// Step 36: Replace "iteration" with a reassignment statement to increase i by 1 (i = i + 1)
// Step 37: This should run 8 times. print the value of i whilst it does
for (let i = 0; i < count; i = i + 1) {
    //console.log(i);
    // Step 38: Replace the log statement to push i to your rows array
    //rows.push(i);
    // Step 44: Instead of pushing i to rows push the character instead
    // Step 45: Use .repeat() on character and give it i for the number
    // Step 46: Add 1 to i in order to account for the 'off-by-one' error
    rows.push(character.repeat(i + 1));
}

// Step 39: Declare the variable 'result' with let and assign it an empty string
let result = "";
// Step 41: Construct a 'for...of' loop  to iterate through your rows array
// Step 42: Add an operation to concatenate the row value to the result value
// Step 43: Add a second addition to add a new line character.
for (const row of rows) {
    result = result + row + "\n";
}
// Step 40: Print result to the console
console.log(result);