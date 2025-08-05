"use strict";

// Promise that rejects immediately with an Error
let sirziakhan = Promise.reject(new Error('failed'));

async function promiseStatus() {
    try {
        let response = await sirziakhan;
        console.log(response, "response");
    } catch (error) {
        console.log(error, "Error");
    }
}

promiseStatus();
