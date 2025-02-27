"use strict";
//Task number 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestName = ["Ali", "Bilal", "Umar", "Hamza"];
// console.log(guestName [0]);
// console.log(guestName [1]);
// console.log(guestName [2]);
// console.log(guestName [3]);
// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));
let absent_Guest = "Ali";
let new_Guest = "Shahmeer";
guestName[0] = new_Guest;
guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));
console.log(`Mr ${absent_Guest} is not coming to the dinner`);
