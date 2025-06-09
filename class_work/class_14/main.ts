///promise
let sirziakhan = Promise.reject('failed');

async function promiseStatus() {
    try {
        let response = await sirziakhan;
        console.log(response, "response");
    } catch (error) {
        console.log(error, "Error");
    }
}

promiseStatus();
