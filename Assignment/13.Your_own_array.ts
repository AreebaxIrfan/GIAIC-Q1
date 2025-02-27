//Task no 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


////To solve this question there is many method by i use two method.
////First Method

// let vehiclesName :string [] = ["Toyota" ,"BMW" , " Honda" ,"Bike" ,]

// let message :string = "I Would like to buy"

// console.log( vehiclesName[0] + " " + message );
// console.log( vehiclesName[1] + " " + message );
// console.log( vehiclesName[2] + " " + message );
// console.log( vehiclesName[3] + " " + message );

//Second Method is..

let transportation :string [] = ["Toyota" ,"BMW" , " Honda" ,"Bike" ,]
transportation.map((items) => console.log(`I Would my own ${items}`));