//Task number # 39
//Write a function called city_country() that takes in the name of a city and its country

function cityCountry(city :string, country :string ): string{
    return`${city}, ${country}`
}

let c1 = cityCountry('Karachi' , 'Pakistan');
let c2 = cityCountry('Kabul' , 'Afganistan');
let c3 = cityCountry('Madrid' , 'Spain');

console.log(c1);
console.log(c2);
console.log(c3);