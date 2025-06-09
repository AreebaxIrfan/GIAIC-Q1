// Task number #34
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, 
// and then use a for loop to print the name of each pizza.

let favorite_pizza: string[] = ["Chicken", "Veg", "Cheese", "Pepperoni"];

for (let pizza of favorite_pizza) {
    console.log(pizza);
}
console.log("\n");

for (let pizza of favorite_pizza) {
    console.log(`I really like ${pizza} pizza!`);
}
