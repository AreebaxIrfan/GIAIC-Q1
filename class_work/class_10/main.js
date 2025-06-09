"use strict";
// class 10
// object.ts
// This is the basic syntax of the object type.

// const objectName = {
//    key: value
// }
// ':' is called colon

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
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Violet"] = 2] = "Violet";
    Color[Color["Black"] = 3] = "Black";
    Color[Color["White"] = 4] = "White";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Brown"] = 6] = "Brown";
})(Color || (Color = {}));

const myFavoriteColor = Color.Black;
console.log(myFavoriteColor);
