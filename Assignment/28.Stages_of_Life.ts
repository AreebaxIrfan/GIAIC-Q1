//Task number 28

// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age :number = 17 ;

if (age < 2) {
    console.log('Your are a baby')
}else if (age < 4 ) {
    console.log('You are a toddler')
}else if ( age < 13 ){
    console.log('You are a child')
}else if ( age < 20 ) {
    console.log('You are a teenager')
}else if (age <65) {
    console.log('You are a adult');
}else {
    console.log('You are a older');
}
