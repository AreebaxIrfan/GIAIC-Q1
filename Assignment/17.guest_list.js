"use strict";
//Task no 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestName = ["Fazal", "Ali", "Umar", "Hamza"];
// console.log(guestName [0]);
// console.log(guestName [1]);
// console.log(guestName [2]);
// console.log(guestName [3]);
// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));
let absent_Guest = "Ali";
let new_Guest = "Shahmeer";
guestName[0] = new_Guest;
guestName.unshift("Bilal");
guestName.splice(2, 0, 'Maaz');
guestName.push('Fazal');
// guestName.map((items) => console.log(`Hello! ${items} , I'm very glad to invite you to in a dinner`));
//the coding of task 17 starting from here..
//appologize to the guest
console.log(`\nSorry ! we will not able to arrange the big table so , we invite only two friends`);
while (guestName.length > 2) {
    let remove_guest = guestName.pop();
    console.log(`We are very Sorry ${remove_guest} , I'm not able to invite in that dinner`);
}
guestName.map((items) => console.log(`\n\nHello! ${items} , \nYou are still invites in the dinner \n Thanks You\n`));
guestName.splice(0, 2);
console.log(guestName);
