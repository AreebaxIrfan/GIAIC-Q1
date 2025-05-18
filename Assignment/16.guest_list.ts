//Task number 16
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestName : string [] = ["Ali" , "Bilal" , "Umar" , "Hamza"];
let absent_Guest : string = "Ali" ; //Mr.ali is not coming
let new_Guest : string = "Shahmeer" ; // the new guest is Shahmeer..

guestName [0] = new_Guest
console.log('Big News! We find big table so we invite more 3 friends');

//the name pf new guest is..
guestName.unshift("Mujtaba");
guestName.splice(2,0,'Maaz');
guestName.push('Fazal');
guestName.map((items) => console.log(`Hello! ${items} , I'm very glad to invite you to in a dinner`))
