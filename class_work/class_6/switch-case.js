// switch case ///
const dayNumber = 1;

switch (dayNumber) {
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
        console.log("Thursday"); // fixed typo from "Tursday"
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

console.log("--------------------------------------");

const isClassMonday = "ni";

switch (isClassMonday) {
    case 'yes':
    case "g":
        console.log("There is Class");
        break;
    case "ni":
    case "yes":  // repeated case "yes" here, you might want to fix that
        console.log("There is no Class");
        break;
}
