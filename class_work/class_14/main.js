"use strict";

// Promise that rejects immediately
const sirziakhan = Promise.reject('failed');

async function promiseStatus() {
    try {
        const response = await sirziakhan;
        console.log(response, "response");
    } catch (error) {
        console.log(error, "Error");
    }
}

promiseStatus();
