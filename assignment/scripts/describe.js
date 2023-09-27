// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and give it the value 'Dane' as a string.
// Then we evaluate if the name value is an exact match to the string value 'Mary'.
// If the name field is equal to 'Mary' we return a true value of 'Hi, Mary!' into the console.log.
// If the name field is not equal to 'Mary' we return a false value of 'How do you do?'.
// Since the name field is equal 'Dane' and not 'Mary' this conditional would be false, so
// We console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a new variable called secret, and do not set its value.
// We create a new variable called code, and we set its value to the number 123.
// We evaluate the variable code with a boolean.  If the value in the code variable is an exact match to 123, we
// Give the variable secret a string value of 'super' and give the code variable a new numeric value of itself times 2.
// If the code was false and not 123 we would give the secret variable to a string of 'duper'.
// We then run the console.log file with the variable secret.
// Because the initial code value was 123 the statement was true, and 
// We console.log 'super'.  The variable code would be updated to the number 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables. The isStudent variable is created as a boolean value of true.  age variable is a number of 34.
// zip is a number value of 55407.
// Our conditional statement asks if isStudent is equal to true AND zip is greater then the number 8000,
// then in the console.log is shows 'You're a student on the West Coast!', otherwise
// It evaluates if the variable isStudent is false OR the age variable is less then 30, if either is true
// It returns 'What are your hobbies?' in the console.log, otherwise
// If the variable isStudent is true and if true displays 'Welcome to Prime!' in the console.log, otherwise
// It returns 'How about the weather?' in the console.log.
// The first condition would be false because the zip is not greater then 8000,
// The second condition would be false because neither is the isStudent false OR the age is less then 30,
// The third condition would be true because the isStudent variable is true, therefore
// We console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


/*
//FIX - values of variables were swapped. Should be:
//let colorOne = 'blue';
//let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - only colorOne was set to purple, not colorTwo. Should be:
//if (mix === true) {colorOne = 'purple'; colorTwo = 'purple'}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//FIX - time should be set as a variable not a constant, should be:
//let time = 4.

let temp = 40;
const time = 4;

//FIX - the wrong compound conditional statement was used in the if statement.  Should be:
//if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//FIX - minAge should be set to a variable instead of a constant, should be:
//let minAge = 21;

let age = 21;
const minAge = 21;

// FIX - A few things wrong here: the problem has been inverted so it is not accurately determining if age is
// greater then or equal to minAge, also the problem doesn't say anything about using the console.log('no entry')
// Should be: 
// if (age >= minAge) {console.log('enter)}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

