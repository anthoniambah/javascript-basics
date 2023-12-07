// 1. A function that converts temperatures between Fahrenheit and Celsius, asking the user for the temperature and the desired conversion.

function convertTemperature() {
  let temp = parseFloat(prompt("Enter the temperature: "));
  let conversion = prompt(
    'Enter "F to C" to convert from Fahrenheit to Celsius, or "C to F" to convert from Celsius to Fahrenheit: '
  );

  if (conversion === "F to C") {
    let celsius = 1.8 * temp + 32;
    document.write(`${temp}°F is equal to ${celsius}°C.`);
  } else if (conversion === "C to F") {
    let fahrenheit = (temp - 32) / 1.8;
    document.write(`${temp}°C is equal to ${fahrenheit}°F.`);
  } else {
    document.write("Invalid");
  }
}
convertTemperature();

// 2. A function that prints a number pyramid pattern, where each row contains numbers in ascending order.

function generateAscendingNumberPyramid(rows) {
  let rowContent = "";
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    rowContent += currentRow;

    console.log(rowContent);
  }
}

generateAscendingNumberPyramid(9);

//Can also be written as this:
function generateAscendingNumberPyramid(rows) {
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let rowContent = "";

    for (let space = 1; space <= rows - currentRow; space++) {
      rowContent += "  ";
    }

    for (let number = 1; number <= currentRow; number++) {
      rowContent += number + " ";
    }

    console.log(rowContent);
  }
}

generateAscendingNumberPyramid(8);

// 3. A function that calculates the greatest common divisor (GCD) of two numbers.
function divisor(a, b) {
  let commonDivisor = "";
  for (let i = 0; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      commonDivisor = i;
    }
  }
  console.log(commonDivisor);
}

divisor(25, 15);

// Second way
function greatestDivisor(num1, num2) {
  let result; //variable declaration
  if (num1 > num2) {
    while (num2 !== 0) {
      result = num1 % num2; //result variable stores the remainder from the modulus operation
      num1 = num2;
      num2 = result;
    }
    console.log("GCD =", num1);
  } else if (num2 > num1) {
    while (num1 !== 0) {
      result = num2 % num1; //result variable stores the remainder from the modulus operation
      num2 = num1;
      num1 = result;
    }
    console.log("GCD =", num2);
  }
}
greatestDivisor(15, 25);
greatestDivisor(36, 16);

// 4. A function that prints a pattern
