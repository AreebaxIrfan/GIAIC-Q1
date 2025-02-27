"use strict";
//Task number #37
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function makeShirt(size = 'large', text = 'I Love typescript') {
    console.log(`You have order a ${size} , shirt that says ${text}`);
}
makeShirt();
makeShirt('medium');
//we also write this code in another way....
makeShirt('small', 'I need a big shirt to wear');
