"use strict";
// class 10
// object.ts
// This is the basic syntax of the object type.

// Object definition:
// The syntax of the brackets (parenthesis) is called object literal

let car = "Mehran";

const mycar = {
    name: "Mehran",
    color: "white",
    brand: "suzuki",
    year: 2021,
};

console.log(mycar); // Access the properties of the object
console.log(mycar.brand);
console.log(mycar["color"]); // Another way to access properties

console.log("------------------------------");

const person = {
    firstname: "Ali",
    lastname: "Khan",
    age: 31,
    country: "America",
    SkinColor: "Black",
    fullName: function () {
        return `Hello my name is ${this.firstname} ${this.lastname}`; // template literal
    }
};

console.log(person.fullName());

console.log("----------------");

const pet = {
    type: 'Cat',
    name: 'tom',
    age: 5,
    color: 'white',
    SayMeow: function () {
        return 'meow meow';
    }
};

console.log(pet.SayMeow());

console.log("---------------------");

const sara = {
    firstName: "Kamal",
    lastName: "Ali",
    sayHello: function () {
        return `Hello, my name is ${this.firstName}`;
    }
};

// Enum
// Enum is a special class that represents a group of constants (unchangeable values)
// It starts with the 0 value by default

let Color;
(function (Color) {
    Color["Red"] = 0;              // Assignment extracted here
    Color[0] = "Red";

    Color["Green"] = 1;
    Color[1] = "Green";

    Color["Violet"] = 2;
    Color[2] = "Violet";

    Color["Black"] = 3;
    Color[3] = "Black";

    Color["White"] = 4;
    Color[4] = "White";

    Color["Yellow"] = 5;
    Color[5] = "Yellow";

    Color["Brown"] = 6;
    Color[6] = "Brown";
})(Color || (Color = {}));

const myFavoriteColor = Color.Black;
console.log(myFavoriteColor); // Output: 3
console.log(Color.Red);       // Output: 0
console.log(Color[0]);        // Output: "Red"
