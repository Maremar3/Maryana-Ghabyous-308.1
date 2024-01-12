/* let word="hello"
console-log(word); */
var word="hello";
console.log(word); 

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4)==50 ;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  (isTwoOdd) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  // Check if all numbers are divisible by 5
// Here, we use modulus to check if something is not divisible.
// check if number % 5 is 0, we can use
// arithmetic to count the devision of all number.
const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("The four numbers are divisible by 5 is "+isDiv5);

//Check if the first number is larger than 5
//if it larger it will return true, if NOT it will return false.
const great=n1>n4;
console.log("check if Number 1 is greater than number 3 "+great);
//Subtract the first number from the second number.
//we can use arithmetic operation -
//subtract then print the result of subtraction
const subtNum=n2-n1;
console.log("The subtraction of first and seconsd number is"+ subtNum);


//To mutiply the previous result by third number
//we can use arithmetic operation * for multiply
//then print the result of multiplication 
const multNum=subtNum*n3 ;
console.log("The multiplaction  of previous result and third number 5 is"+ multNum);


//const lower25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const less25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

//To dispaly reminder of previous result  by the fourth number.
////we can use dividion  operation % for division 
//then print the result of multiplication 
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

/* const dothis = (isSum50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  (n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4); */
  const doThis = isSum50 && isTwoOdd && less25 && isUnique;
  console.log("The result is "+doThis);

  