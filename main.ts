//class 10
//objext.ts
//its the basic syntex of the object type..
//const objectName ={
    //key :value;
    // ' :' its called colon

//}
//object defination:
// the syntex of the brackets (paraenthesis) is called object literal
let car:string ="Mehran";
const mycar ={
    name :"Mehran",
    color: "white",
    brand : "suzoki",
    year : 2021,
}
console.log(mycar);   //its show to accessice the properties of the object
console.log(mycar.brand);
console.log(mycar["color"])//another way to excute the code..

////properties
//the (name : value ) is called the properties..
//method
//a method is a function to store the property..
console.log("------------------------------");
const person ={
    firstname : "Ali",
    lastname : "Khan",
    age : 31,
    country :"America",
    SkinColor:"Black",
    fullName : function () {
        return `Hello my name is ${this.firstname} ${this.lastname}` //template literal.
    }
};
console.log(person.fullName());
console.log("----------------");
const pet:{
    type :string ,
    name :string,
    age : number,
    color : string,
    SayMeow :() => string,
}={
    type:'Cat',
    name:'tom',
    age : 5,
    color : ' white',
    SayMeow : function (){
        return 'meow meow';
    }
        
    }
console.log(pet.SayMeow());
console.log("---------------------");
interface person {
    firstName :string,
    lastName : string,
    sayHello () : string,  


    }
const sara :person ={
    firstName:"Kamal",
    lastName:"Ali",
    sayHello :function (){
        return `Hello ,my name is ${this.firstName}`
    }
};
//Enum 
//enum is a special  (class)  that represent aa group of const and unchangable value
//two parts of the enum and the string
//its start with the 1 value 
//synthex
enum Color {         ///always default is numeric
    Red,
    Green,
    voilet,
    Black,
    White,
    Yellow,
    Brown,
};
const myFavoiteColor:Color = Color.Black;
console.log(myFavoiteColor)
//fully initiaalized , initialized enum s






console.log("------------------------------------");
//Module.
//javascript module will allow to break your file and also separate the code its easier to read and also to recorrect.
//Module are import by the externally and use in your file or in the web.
