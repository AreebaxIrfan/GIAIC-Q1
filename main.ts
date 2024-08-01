//operator in typescript.. (25 march 2024).
//operators allow us to perform operations on variable and values.
//Arthematic operator.
let add : number = 2+4;
console.log(add);

let sub: number = 3 - 3;
console.log(sub);

//power 
let power : number = 2**4;
console.log(power)

//assigment operator..
//post peri
let x = 10;
x += 5;
console.log(x);
//by sir isfhan

let pizzaprice : number =1000;//long way code
let tax =150;
let total = pizzaprice + tax;
console.log(total);

let pizzaprices: number =1000;
let taxs :number =150;
pizzaprices += taxs;
console.log("Pizza Prices =", pizzaprices );

//Comperison Method..(Operator)
let dataBasePassword : string ="12345"; //when we store this password
let resentlyusedthepassword : any = 12345; //"123456"
console.log(dataBasePassword == resentlyusedthepassword );
console.log(dataBasePassword === resentlyusedthepassword );

//not equal
let password :string ="12345";
let confirmpassword :string ="12345";
console.log('line no 40', password!=password);
console.log('line no 41' , password !== password);
//Comparison..
let text1 ="A";
let text2 ="B";
let result = text1 > text2;
console.log(result);

let answer :string ="correct";
if (answer === "correct"){
    console.log("you get the correct")
}else {
    console.log("you are wrong")
}


