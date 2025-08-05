"use strict";
// Task: Demonstrate object types, methods, interfaces, and enums in TypeScript

// Object definition using object literal
const car: string = "Mehran";
const myCar = {
    name: "Mehran",
    color: "white",
    brand: "suzuki",
    year: 2021,
};
console.log(myCar); // Access object properties
console.log(myCar.brand);
console.log(myCar["color"]); // Alternative way to access properties

// Object with method
console.log("------------------------------");
const person = {
    firstName: "Ali",
    lastName: "Khan",
    age: 31,
    country: "America",
    skinColor: "Black",
    fullName: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`; // Template literal
    }
};
console.log(person.fullName());

console.log("----------------");
const pet: {
    type: string,
    name: string,
    age: number,
    color: string,
    sayMeow: () => string,
} = {
    type: "Cat",
    name: "Tom",
    age: 5,
    color: "white",
    sayMeow: function () {
        return "meow meow";
    }
};
console.log(pet.sayMeow());

console.log("---------------------");
// Interface with PascalCase naming
interface Person {
    firstName: string;
    lastName: string;
    sayHello: () => string;
}

const sara: Person = {
    firstName: "Kamal",
    lastName: "Ali",
    sayHello: function () {
        return `Hello, my name is ${this.firstName}`;
    }
};
console.log(sara.sayHello());

console.log("---------------------");
// Enum: Represents a group of constant values
enum Color {
    Red,    // 0
    Green,  // 1
    Violet, // 2
    Black,  // 3
    White,  // 4
    Yellow, // 5
    Brown   // 6
}
const myFavoriteColor: Color = Color.Black;
console.log(myFavoriteColor); // Outputs: 3

console.log("------------------------------------");
// Note: Modules can be used to separate code for better readability and reusability.
