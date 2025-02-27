var pubg;
pubg = " I am playing PUBG ";
console.log(pubg);
//SYNTRONUS 
function makePizza() {
    var order = "Your pizza  is being prepared";
    console.log(order, "Kitchen"); //function local scope
    return order;
}
;
var deliver = makePizza();
console.log(deliver, "Table");
//Promise
function makePizza1() {
    console.log("Your Pizza is being prepared");
}
// let sirZiaPromise1 = new Promise (() => "Your Pizza is being prepared");
// console.log(new Promise () ," Table") 
// let sirZiaPromise =  make Promise (() => "Your Pizza is being prepared");
// console.log(make Promise () ,"In Table") 
// let sirPromise = new Promise ((resolve ; reject)=>{console.log"it's time to off"}){
//     if (new Promise = "It's time to off"){
//         console.log("")
//     }else{
//         console.log("NOPE")
//     }
// }
var sirZia = new Promise(function (resolve, reject) {
    console.log("Its time to off");
    resolve("True");
});
sirZia.then(function () {
    console.log("True");
});
