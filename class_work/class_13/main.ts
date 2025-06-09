let pubg 
pubg = " I am playing PUBG ";
console.log(pubg)
//SYNTRONUS 


function makePizza(){                    //globe function 
    let order = "Your pizza  is being prepared"
    console.log(order , "Kitchen")       //function local scope
    return order
};
let deliver=makePizza();
console.log(deliver , "Table");

//Promise
function makePizza1() {
    console.log("Your Pizza is being prepared")
}
//Promise
let sirZia = new Promise ((resolve, reject ) =>{
    console.log("Its time to off")
    resolve("True")
});

sirZia.then (()=> {
    console.log("True")
})
