// Implement a function that takes a string as input and counts the frequency of each character. Print the results.
function frequencyChecker(input) {
  let name = "";
  console.log(name.length);
  // let check = input.toString();
  //   for (let i = 0; i <= input.length; i++) {}
}

// Currency Converter:
// Create a currency converter program that converts an amount from one currency to another. Ask the user for the exchange rate and the amount in the original currency.
function currencyConverter() {
  let exchangeRate = prompt("Enter the amount you want to convert: ");
  let currency = prompt("Enter exchange rate, Dollar or Naira: ");
  if (currency == "Dollar") {
    let naira = 1000 * exchangeRate;
    console.log(`$${exchangeRate} is equal to N${naira}.`);
  } else if (currency == "Naira") {
    let dollar = exchangeRate / 1000;
    console.log(`N${exchangeRate} is equal to $${dollar}.`);
  } else {
    console.log("Invalid format. Please provide the correct information");
  }
}

console.log(currencyConverter());

// Leap Year Checker:
// Write a function that determines whether a given year is a leap year or not.
function leapYearChecker(year) {
  if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(leapYearChecker(2024));
