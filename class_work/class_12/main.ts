//understanding setTime out and web APIS(appilication process interface)
// Web APIs is a set of APIs that are provided by the browser of javascript
//setTime is a function that is used to sehdual a functiom to be excuted after a specified time


console.log("One ");
console.log("Two");
setTimeout(function(){
    console.log("three")
}, 10000);
console.log("four")
//callback Function
function  myFunction ( callback: () => void ){
    console.log("making pulao");
    

} 