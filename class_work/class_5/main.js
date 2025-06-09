// operator in TypeScript.. (25 March 2024).
// operators allow us to perform operations on variables and values.
// Arithmetic operator.

const add = 2 + 4;
console.log(add);

// power 
const power = Math.pow(2, 4);
console.log(power);

// assignment operator..
// post increment/decrement example
let x = 10;
x += 5;
console.log(x);

// by Sir Isfhan
const pizzaprice = 1000; // long way code
const tax = 150;
const total = pizzaprice + tax;
console.log(total);

let pizzaprices = 1000;
const taxs = 150;
pizzaprices += taxs;
console.log("Pizza Prices =", pizzaprices);

// Comparison Method..(Operator)
const dataBasePassword = "12345"; // when we store this password
const resentlyusedthepassword = 12345; //"123456"
console.log(dataBasePassword == resentlyusedthepassword);
console.log(dataBasePassword === resentlyusedthepassword);

// not equal
const password = "12345";
const confirmpassword = "12345";
console.log('line no 40', password != password);
console.log('line no 41', password !== password);

// Comparison..
const text1 = "A";
const text2 = "B";
const result = text1 > text2;
console.log(result);

const answer = "correct";
if (answer === "correct") {
    console.log("you get the correct");
} else {
    console.log("you are wrong");
}
