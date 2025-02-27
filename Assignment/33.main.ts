//Task number #33
//Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers) {

    if(number === 1) {
        console.log(`${number}st`) //1st
    } else if (number === 2) {
        console.log(`${number}nd`) //2nd
    } else if (number ===3){
        console.log(`${number}rd`) //3th
    } else (
        console.log(`${number}th`) //4th ,5th ,6th ,7th, 8th, 9th
    )
} 
