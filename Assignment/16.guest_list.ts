//Task number 16
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestName : string [] = ["Ali" , "Bilal" , "Umar" , "Hamza"];

// console.log(guestName [0]);
// console.log(guestName [1]);
// console.log(guestName [2]);
// console.log(guestName [3]);

// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));

let absent_Guest : string = "Ali" ; //Mr.ali is not coming
let new_Guest : string = "Shahmeer" ; // the new guest is Shahmeer..

guestName [0] = new_Guest
// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));

// //this is  guest is not coming head line
// console.log(`Mr ${absent_Guest} is not coming to the dinner`)

//Good news.....

//Task number 16 coding starting..


console.log('Big News! We find big table so we invite more 3 friends');

//the name pf new guest is..
guestName.unshift("Mujtaba");
guestName.splice(2,0,'Maaz');
guestName.push('Fazal');
guestName.map((items) => console.log(`Hello! ${items} , I'm very glad to invite you to in a dinner`))
