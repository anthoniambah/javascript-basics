// A function that calculates the factorial of a given number.
// DO NOT USE PROMPT, ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function calcFactorial(num) {
  let total = 1;
  for (let x = 1; x <= num; x++) {
    total *= x;

    // if (num === 0 || num === 1) {
    //   return 1;
    // }
  }
  return total;
}

console.log(calcFactorial(5));
