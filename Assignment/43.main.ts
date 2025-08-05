"use strict";
// Task number #43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [...magicians]; // Create a copy of the input array
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the great';
    }
    return greatMagicians;
}

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + ' the Great');
    }
    return greatMagicians;
}

const magicians2: string[] = ["Bilal", "Ali", "Irfan", "Maaz", "Saad"];
const greatMagicians1: string[] = make_great(magicians2);
show_magicians(magicians2); // Original array
show_magicians(greatMagicians1); // Modified array

const magicians3: string[] = ["Ali", "Bilal", "Irfan", "Maaz"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3); // Original array
show_magicians(greatMagicians2); // Modified array
