//Task no 18

//this array is not in alphabetical order.
let placeLike :string [] = ["Japan" ,"Turkey" , "London" , "Dubai" , "Pakistan" , "Singapore"    ];

// Print array in its original order
console.log("Original order" , placeLike);

//print the array in the alphabatic order
console.log("Alphabatic order " , [...placeLike].sort());

//the  array is still in its original order by printing it
console.log("Original order after sorting" , placeLike);

//print the array in the reverse alphabatic order
console.log("reverse alphabatic order" , [...placeLike].sort().reverse());

//print the array is still in its original order by printing it
console.log("Original order after reverse sorting" , placeLike);


//print the Reverse order list. Print the array to show that its order has changed
placeLike.reverse();
console.log("reversed order:" , placeLike);

// print list to show it’s back to its original order.
placeLike.reverse();
console.log("Back Orginal order:" , placeLike);

//Sort your array so it’s stored in alphabetical order.
placeLike.sort();
console.log("sort in the alphabatic order:" , placeLike );

//Sort to change thw array so it’s stored in reverse alphabetical order.
placeLike.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabatic order:" ,placeLike);