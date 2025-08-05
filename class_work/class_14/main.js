"use strict";

// Promise that rejects immediately with an Error
const sirziakhan = Promise.reject(new Error('failed'));

async function promiseStatus() {
    try {
        const response = await sirziakhan;
        console.log(response, "response");
    } catch (error) {
        console.log(error, "Error");
    }
}

promiseStatus();
