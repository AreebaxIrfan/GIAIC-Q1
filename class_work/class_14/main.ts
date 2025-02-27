///promise
let sirziakhan = new Promise (function(response , reject){
//    response('Passed')
   reject('failed')

});
async function promiseStatus(){
    try{
        let response = await sirziakhan
        console.log(response ," response")
    } catch(error){
        console.log(error , "Error")

    }
    // let response = await sirziakhan
    // console.log(response)
}
promiseStatus()