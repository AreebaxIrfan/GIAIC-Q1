import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
console.log("HI User! You are using and atm machine , if you want to withdraw or check your balance! ");
console.log("PLease enter your pin code");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one of this option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    // console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your current Balance is :" + myBalance);
        }
        else {
            console.log("You add the unvalid value");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
