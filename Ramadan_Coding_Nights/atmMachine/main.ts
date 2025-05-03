import inquirer from "inquirer";

async function atm() {
  let myBalance = 10000; // Dollars
  let myPin = 1234;

  console.log("Welcome! You are using an ATM machine to withdraw or check your balance.");
  console.log("Please enter your PIN code");

  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your PIN",
      type: "number",
    },
  ]);

  if (pinAnswer.pin === myPin) {
    console.log("Correct PIN code!");

    let operationAns = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
      },
    ]);

    if (operationAns.operation === "Withdraw") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter your amount",
          type: "number",
        },
      ]);

      if (!amountAns.amount || amountAns.amount <= 0) {
        console.log("Please enter a valid amount greater than 0.");
      } else if (amountAns.amount > myBalance) {
        console.log("Insufficient balance.");
      } else {
        myBalance -= amountAns.amount;
        console.log(`Your current balance is: ${myBalance}`);
      }
    } else if (operationAns.operation === "Check Balance") {
      console.log(`Your balance is: ${myBalance}`);
    }
  } else {
    console.log("Incorrect PIN.");
  }
}

atm().catch((error) => console.error("An error occurred:", error));
