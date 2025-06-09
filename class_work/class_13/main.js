let pubg;
pubg = "I am playing PUBG";
console.log(pubg);

// SYNCHRONOUS
function makePizza() {
    const order = "Your pizza is being prepared";
    console.log(order, "Kitchen"); // function local scope
    return order;
}

const deliver = makePizza();
console.log(deliver, "Table");

// PROMISE example
function makePizza1() {
    console.log("Your Pizza is being prepared");
}

// Correct promise example
const sirZia = new Promise(function (resolve, reject) {
    console.log("Its time to off");
    resolve("True");
});

sirZia.then(function () {
    console.log("True");
});
