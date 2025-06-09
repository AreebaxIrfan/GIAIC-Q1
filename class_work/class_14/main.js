"use strict";

// Promise that rejects immediately
const sirziakhan = new Promise(function (resolve, reject) {
    // resolve('Passed'); // Uncomment if you want to resolve
    reject('failed');
});

async function promiseStatus() {
    try {
        const response = await sirziakhan;
        console.log(response, "response");
    } catch (error) {
        console.log(error, "Error");
    }
}

promiseStatus();
