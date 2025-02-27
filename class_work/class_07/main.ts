//Array 
const shoppingLists :string[] =["Bread" , 'Milk' , 'Butter' ];
console.log(shoppingLists);
console.log("-----------------");
const shoppingList  =["Bread" , 'Milk' , 'Butter' ,3,5];
console.log(shoppingList);
console.log("-----------------");
//uniontype
const item :(string|number)[]=["rose" , "tulip" , "jasmine" ,  2 , 4 ]
console.log(item)
//Methods of array 
//push..
const itemList : string [] =["Burger" , " fries" ,"pizza" ,"spagatti"];
console.log(itemList.push("macroni"));
console.log(itemList)
//pop
const itemLists :string [] =[ " Pink " ,"Blue " ,"Orange"]
itemLists.pop();
console.log(itemLists)
//itemLists = itemLists.length()
console.log(itemLists)
//
//Tuples
let ourTuple : [number , boolean , string];
 ourTuple = [ 25 , false , "this is a coder"] ;
console.log (ourTuple);
console.log("---------------")
//Tuple
let our_Tuple : [number , boolean ,string];
our_Tuple =[15 , true , "its a program"];
console.log(our_Tuple)