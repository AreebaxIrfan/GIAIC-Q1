//operator in typescript.. (25 march 2024).
//operators allow us to perform operations on variable and values.
//Arthematic operator.
var add = 2 + 4;
console.log(add);
//power 
var power = Math.pow(2, 4);
console.log(power);
//assigment operator..
//post peri
var x = 10;
x += 5;
console.log(x);
//by sir isfhan
var pizzaprice = 1000; //long way code
var tax = 150;
var total = pizzaprice + tax;
console.log(total);
var pizzaprices = 1000;
var taxs = 150;
pizzaprices += taxs;
console.log("Pizza Prices =", pizzaprices);
//Comperison Method..(Operator)
var dataBasePassword = "12345"; //when we store this password
var resentlyusedthepassword = 12345; //"123456"
console.log(dataBasePassword == resentlyusedthepassword);
console.log(dataBasePassword === resentlyusedthepassword);
//not equal
var password = "12345";
var confirmpassword = "12345";
console.log('line no 40', password != password);
console.log('line no 41', password !== password);
//Comparison..
var text1 = "A";
var text2 = "B";
var result = text1 > text2;
console.log(result);
var answer = "correct";
if (answer === "correct") {
    console.log("you get the correct");
}
else {
    console.log("you are wrong");
}
