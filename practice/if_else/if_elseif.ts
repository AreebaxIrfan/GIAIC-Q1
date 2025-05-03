const isRainy = false;
const isTherePost = true;

if (isRainy && isTherePost) {
    console.log("There is no class (both rainy and post)");
} else if (isTherePost) {
    console.log("There is no class (post only)");
} else {
    console.log("There is class");
}
console.log("-------------------------------");