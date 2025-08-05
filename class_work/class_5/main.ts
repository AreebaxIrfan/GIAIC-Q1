// Operator examples in TypeScript (25 March 2024)
// Operators allow us to perform operations on variables and values.

// Arithmetic operators
const add: number = 2 + 4;
console.log("Addition:", add); // 6

// Power
const power: number = 2 ** 4;
console.log("Power (2^4):", power); // 16

// Assignment operators
let x: number = 10;
x += 5;
console.log("After += 5:", x); // 15

// Example: Pizza price calculation
const pizzaPrice: number = 1000;
const tax: number = 150;
const total: number = pizzaPrice + tax;
console.log("Total pizza price (long way):", total); // 1150

let pizzaPrices: number = 1000;
const taxes: number = 150;
pizzaPrices += taxes;
console.log("Pizza Prices (using +=):", pizzaPrices); // 1150

// Comparison operators
const dataBasePassword: string = "12345";
const recentlyUsedPassword: string = "12345"; // Changed to string for consistency
console.log("Loose equality (==):", dataBasePassword == recentlyUsedPassword); // true
console.log("Strict equality (===):", dataBasePassword === recentlyUsedPassword); // true

// Not equal comparisons
const password: string = "12345";
const confirmPassword: string = "12345";
console.log("Not equal (!=):", password != confirmPassword); // false
// Note: Use Number.isNaN() for checking NaN in numeric operations, e.g., Number.isNaN(x) instead of x !== x
// Example: if (Number.isNaN(x)) { console.log("x is NaN"); }
console.log("Strict not equal (!==):", password !== confirmPassword); // false

// Comparison operators (strings)
const text1: string = "A";
const text2: string = "B";
const result: boolean = text1 > text2; // Lexicographical comparison
console.log("Is A > B?", result); // false

// Conditional logic
const answer: string = "correct";
if (answer === "correct") {
    console.log("You got it correct!");
} else {
    console.log("You are wrong");
}
