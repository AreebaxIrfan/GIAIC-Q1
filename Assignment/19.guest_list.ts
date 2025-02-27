//Task no 19

// let guestName : string [] = ["Fazal" , "Ali" , "Umar" , "Hamza"];

// console.log(guestName [0]);
// console.log(guestName [1]);
// console.log(guestName [2]);
// console.log(guestName [3]);

// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));

// let absent_Guest : string = "Ali" ;
// let new_Guest : string = "Shahmeer" ;

// guestName [0] = new_Guest
// guestName.map((items) => console.log(`hello! ${items}, I am very glad to invite you to in a dinner`));

// console.log(`Mr ${absent_Guest} is not coming to the dinner`)

// console.log('Big News! We find big table so we invite more 3 friends');

// guestName.unshift("Bilal");
// guestName.splice(2,0,'Maaz');
// guestName.push('Fazal');
// guestName.map((items) => console.log(`Hello! ${items} , I'm very glad to invite you to in a dinner`));

// console.log(`\nSorry ! we will not able to arrange the big table so , we invite only two friends`);

// while(guestName.length > 2){
//     let remove_guest = guestName.pop();
//     console.log(`We are very Sorry ${remove_guest} , I'm not able to invite in that dinner`);
// }

// guestName.map((items) => console.log(`\n\nHello! ${items} , \nYou are still invites in the dinner \n Thanks You\n`));

// guestName.splice(0,2);

// console.log(guestName);


//coding start form here ..

///Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let invitation : string [] = ["Bilal " , "Shahmeer"];
let count_invitation : number = invitation.length;

console.log(`${count_invitation} person come in to the dinner`);

