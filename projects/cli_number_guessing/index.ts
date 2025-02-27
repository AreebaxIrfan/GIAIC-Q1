#! /usr/bin/env node
import inquirer from "inquirer";

//1) Computerwill generate a random number 

//2) Take the input to guess the number

//3)Compare user input with computer generative number 
//and show result
const randomNumber = Math.floor(Math.random() * 6 +1);
console.log("Welcome..");
const answer = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        massage:"PLease guess the number",
    },
]);
if (answer.userGuessNumber === randomNumber){
    console.log("Congratulation !you guessed right number");
} else {
    console.log("You guessed the wrong number");
}
console.log(randomNumber);
