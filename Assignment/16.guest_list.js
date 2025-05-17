"use strict";
let guestName = ["Ali", "Bilal", "Umar", "Hamza"];
let absent_Guest = "Ali"; //Mr.ali is not coming
let new_Guest = "Shahmeer"; // the new guest is Shahmeer..
guestName[0] = new_Guest;
// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));
// //this is  guest is not coming head line
// console.log(`Mr ${absent_Guest} is not coming to the dinner`)
//Good news.....
console.log('Big News! We find big table so we invite more 3 friends');
//the name pf new guest is..
guestName.unshift("Mujtaba");
guestName.splice(2, 0, 'Maaz');
guestName.push('Fazal');
guestName.map((items) => console.log(`Hello! ${items} , I'm very glad to invite you to in a dinner`));
