"use strict";
//Task number 45
function creatCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
;
const mycar = creatCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
