"use strict";
//task number # 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique user
let current_users = ["Admin", "Eric", "Ali", "Saad", "Hamza"];
let new_users = ["Admin", "Eric", "Bilal", "Irfan", "Maaz"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user} ,that name is taken`);
    }
    else {
        console.log(`Yes! ${new_user} , You are still in avalible list `);
    }
}
