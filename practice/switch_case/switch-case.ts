//switc case///
const dayNumber :number =1;
switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
     case 5:
         console.log("Tursday")
         break;
    case 6:
        console.log("Friday");
         break;
    case 7:
        console.log("Saturday");
        break;
    case 8 :
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}
console.log("--------------------------------------");

type myAnswer  = "yes" | "no" | "g" | "ni";
const  isClassMonday :myAnswer = "ni";
switch(isClassMonday){
    case 'yes' as myAnswer:
    case "g" as myAnswer:
    console.log("There is Class");
    break;
    case "ni" as myAnswer:
    case "yes" as myAnswer:
        console.log("There is no Class");
        break;
}
