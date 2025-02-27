"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class 09
//function 
//basic synthex of the function 
//function functionName (parameter1 ,parameter2 ,parameter 3){
//functionbody
//}
function myInfo() {
    //functionBody
    console.log("Hi I'm a student");
    console.log("i'm a coder");
    console.log("---------------------------");
}
//call the function first otherwise can't be excute the function
myInfo(); //invoke function 
myInfo();
myInfo();
console.log("-----------------");
//function with parameter
function myfunctionInParameter(name, country, job) {
    console.log("This is ", name);
    console.log(`I'm from ${country}`);
    console.log("I am a" + job);
}
myfunctionInParameter('sara ', 'pakistan', 'Software Engineer');
console.log("+++++++++++++++++++++++++++");
function myfunctions(name, country, job = 'Software Engineer') {
    console.log("This is ", name);
    console.log(`I'm from ${country}`);
    console.log("I am a" + job);
}
myfunctions("ali", "Pakistan");
console.log("+++++++++++++++++++++++++++");
function myFunctions(name, country, job) {
    console.log("Hi my name is ", name);
    console.log(`i am from ${country}`);
    if (job) {
        console.log("I am a" + job);
    }
}
myFunctions("Sara", "Korea");
console.log("+++++++++++++++++++++++++++");
function myfunctionsSum(n1, n2) {
    return n1 + n2;
}
const result = myfunctionsSum(20, 10);
console.log(result);
console.log("+++++++++++++++++++++++++++");
toDateTime();
function toDateTime() {
    const date = new Date();
    console.log(date);
}
console.log("+++++++++++++++++++++++++++");
const myfunctionIs = function () {
    console.log("My name is Sara ");
    console.log("I am from Iceland");
};
myfunctionIs();
//Arrow Function
const myFunctionsIs = (num1, num2) => num1 * num2;
const result2 = myFunctionsIs(10, 20);
console.log(result2);
console.log("+++++++++++++++++++++++++++");
const functionsIs = (name, country, job) => {
    //functionBody
    console.log("My name is Sara " + name);
    console.log("I am from Iceland" + country);
    console.log("I am at a" + job);
};
const sumAllNum = (...numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
};
const result3 = sumAllNum(10, 20, 90);
console.log(result3);
