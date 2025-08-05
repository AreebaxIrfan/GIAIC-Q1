"use strict";
// Task number 45
function creatCar(manufacture: string, model: string, optional: { [key: string]: any }): { manufacture: string, model: string, [key: string]: any } {
    return { manufacture, model, ...optional };
}

const mycar = creatCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
