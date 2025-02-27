"use strict";
//Task number #4
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Bilal", "Ali", "Irfan", "Maaz", "Saad"];
show_magicians(magician);
