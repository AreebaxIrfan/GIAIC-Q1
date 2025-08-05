"use strict";
// Task number 44
// Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items: string[]): void {
    console.log("Sandwich order:  ");
    for (const item of items) {
        console.log(` - ${item}`);
    }
}
console.log("Enjoy your sandwich, Eric!");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
