// Random Number Guessing Game:
// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

function randomGuessingGame(num) {
  let number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  if (num < number) {
    return "Nah! Too low. You've got this!";
  } else if (num > number) {
    return "Phew! Too high. You can do it!";
  } else if (num == number) {
    return "Jackpot! You're a lucky winner!!!";
  }
}

console.log(randomGuessingGame(7));
