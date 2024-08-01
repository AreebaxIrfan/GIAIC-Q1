//class 09
//function 
//basic synthex of the function 
//function functionName (parameter1 ,parameter2 ,parameter 3){
    //functionbody
//}
function myInfo (): void{ //function declaration
    //functionBody
    console.log("Hi I'm a student");
    console.log("i'm a coder")
    console.log("---------------------------")
}
//call the function first otherwise can't be excute the function
myInfo (); //invoke function 
myInfo ();
myInfo ();
console.log("-----------------");
//function with parameter
function myfunctionInParameter (name:string , country :string , job :string):void{
    console.log("This is ", name);
    console.log(`I'm from ${country}`);
    console.log("I am a" + job)
}
myfunctionInParameter('sara ' , 'pakistan' , 'Software Engineer');

console.log("+++++++++++++++++++++++++++");
function myfunctions(name :string , country :string , job:string = 'Software Engineer' ){
    console.log("This is ", name);
    console.log(`I'm from ${country}`);
    console.log("I am a" + job)
}

myfunctions("ali" ,"Pakistan")
console.log("+++++++++++++++++++++++++++");
function myFunctions(name :string , country :string ,job?:string):void{
    console.log("Hi my name is " ,name);
    console.log(`i am from ${country}`);
    if (job){
        console.log("I am a" + job);
    }
  
}
myFunctions("Sara" , "Korea");
console.log("+++++++++++++++++++++++++++");
function myfunctionsSum ( n1 :number , n2 :number):number{
    return n1+ n2
}
const result :number = myfunctionsSum( 20 , 10);
console.log(result)
console.log("+++++++++++++++++++++++++++");

toDateTime();

function toDateTime(): void{
    const date : Date =new Date();
    console.log(date)
}
console.log("+++++++++++++++++++++++++++");
const myfunctionIs = function () :void {
    console.log("My name is Sara ");
    console.log("I am from Iceland");

};
myfunctionIs();

//Arrow Function
const myFunctionsIs = (num1 :number ,num2 :number) => num1 * num2;
const result2 : number = myFunctionsIs (10,20);
console.log(result2)
console.log("+++++++++++++++++++++++++++");
const functionsIs = (name : string , country :string , job :string)  => {
    //functionBody
    console.log("My name is Sara " +name);
    console.log("I am from Iceland" +country);
    console.log("I am at a" + job);
};

const sumAllNum = (...numbers :number[]) :number => {
    let total :number = 0;
    for( const number of numbers) {
        total += number;

    }
    return total; 
}
const result3 :number =  sumAllNum (10,20,90 );
console.log(result3)