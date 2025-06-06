//Task number 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestName : string [] = ["Ali" , "Bilal" , "Umar" , "Hamza"];

let absent_Guest : string = "Ali" ;
let new_Guest : string = "Shahmeer" ;

GuestName [0] = new_Guest
GuestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));

console.log(`Mr ${absent_Guest} is not coming to the dinner`)

