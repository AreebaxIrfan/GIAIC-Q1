import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.green("Hello World!", "How are you"));
console.log(chalk.blue.bgCyanBright("Hello World!", "How are you"));
console.log(chalk.black.bold.bgRedBright("Hello World!", "How are you"));
console.log(chalk.yellow("Hello World!", "How are you"));
console.log("_______________________");
console.log(chalk.blueBright.bold.bgGray("Ali"));
console.log(
  chalk.red.bgYellow("Hello", chalk.underline.bgBlueBright.yellow("world") + "!")
);

async function askAge() {
  let answers = await inquirer.prompt([
    {
      name: "age",
      type: "number",
      message: "Enter your Age:",
    },
  ]);

  console.log(
    chalk.blue(
      `Insha Allah, in ${60 - answers.age} years you will be 60 years old.`
    )
  );
}

askAge();