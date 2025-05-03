#!/usr/bin/env node
import inquirer from "inquirer";

async function numberGuessingGame() {
  try {
    console.log("Welcome to the Number Guessing Game!");
    console.log("Guess a number between 1 and 6.");

    const randomNumber = Math.floor(Math.random() * 6 + 1);

    const answer = await inquirer.prompt([
      {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess the number (1-6):",
      },
    ]);

    const guess = answer.userGuessNumber;

    if (!guess || isNaN(guess) || guess < 1 || guess > 6) {
      console.log("Invalid input! Please enter a number between 1 and 6.");
    } else if (guess === randomNumber) {
      console.log("Congratulations! You guessed the right number!");
    } else {
      console.log(`Sorry, you guessed the wrong number. The number was ${randomNumber}.`);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

numberGuessingGame();