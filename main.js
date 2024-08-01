"use strict";
//class 10
//objext.ts
//its the basic syntex of the object type..
//const objectName ={
//key :value;
// ' :' its called colon
Object.defineProperty(exports, "__esModule", { value: true });
//}
//object defination:
// the syntex of the brackets (paraenthesis) is called object literal
let car = "Mehran";
const mycar = {
    name: "Mehran",
    color: "white",
    brand: "suzoki",
    year: 2021,
};
console.log(mycar); //its show to accessice the properties of the object
console.log(mycar.brand);
console.log(mycar["color"]); //another way to excute the code..
////properties
//the (name : value ) is called the properties..
//method
//a method is a function to store the property..
console.log("------------------------------");
const person = {
    firstname: "Ali",
    lastname: "Khan",
    age: 31,
    country: "America",
    SkinColor: "Black",
    fullName: function () {
        return `Hello my name is ${this.firstname} ${this.lastname}`; //template literal.
    }
};
console.log(person.fullName());
console.log("----------------");
const pet = {
    type: 'Cat',
    name: 'tom',
    age: 5,
    color: ' white',
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
        return `Hello ,my name is ${this.firstName}`;
    }
};
//Enum 
//enum is a special  (class)  that represent aa group of const and unchangable value
//two parts of the enum and the string
//its start with the 1 value 
//synthex
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["voilet"] = 2] = "voilet";
    Color[Color["Black"] = 3] = "Black";
    Color[Color["White"] = 4] = "White";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Brown"] = 6] = "Brown";
})(Color || (Color = {}));
;
const myFavoiteColor = Color.Black;
console.log(myFavoiteColor);
