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

// 4. A function that prints a pattern
