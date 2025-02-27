//Task number # 24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//First Condition.
//• Tests for equality and inequality with strings

let name_1 : string = "Irfan";
let name_2 : string = "Muhammad Irfan";
let name_3 : string = "Muhammad Irfan Khan";

if (name_1 == name_3){
    console.log("Names are equal")
}else{
    console.log("names are not equal")
}

if(name_1 != name_2){
    console.log("name are equal")
}else{
    console.log("name are not equal")
}

//• Tests using the lower case function

let age_1 : number = 18
let age_2 : number = 30

if ( age_1 == age_2){
    console.log("number are equal")
}else {
    console.log("number are not equal")
}
if(age_1 != age_2){
    console.log("numbers are equal")
}else{
    console.log("number are not equal")
}