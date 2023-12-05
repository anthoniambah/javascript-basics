// 1. A function that checks if the input/parameter is an even number.
function checkEven(number) {
  if (number % 2 === 0) {
    return "Even Number";
  } else {
    return "Not an Even Number!";
  }
}

console.log(checkEven(5));

// 2. A function that prints to the console n1 to n2, where n1 is the first input/parameter and n2 is the second input/parameter.
function printNumbers(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

printNumbers(-10, -4);

// If we want the function to print out numbers when n1 > n2, we have:
function printBack(n1, n2) {
  for (let x = n1; x >= n2; x--) {
    console.log(x);
  }
}

printBack(100, 94);

// 3. A function that sums the values in between two numbers. eg calcFunc(1, 3) returns 6, i.e. 1+2+3.
function calcNumbers(n1, n2) {
  let total = 0;
  for (let y = n1; y <= n2; y++) {
    total += y;
  }
  return total;
}

console.log(calcNumbers(1, 3));
