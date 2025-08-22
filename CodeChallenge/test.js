const data = require('./users-db.json'); 
const countryChinaDetails = [];
let chinaTotalIncome = 0;
const countryChinaFemaleIncomeDetails=[]
let chinaFemaleTotalIncome=0;// Make sure the filename matches exactly

const country = data.map(countryName => countryName.country); // Extract all names
const uniqueNames = [...new Set(country)]; 
for (let j = 0; j < data.length; j++) {


  if (data[j].country.toLowerCase() === uniqueNames) { // lowercase match
    countryChinaDetails.push(data[j]);}   
    chinaTotalIncome += Number(data[j].income);    // ensure numeric addition
}
console.log(chinaTotalIncome)

for (let k = 0; k < data.length; k++) {


  if (data[k].gender.toLowerCase() === "Female") { // lowercase match
    countryChinaFemaleIncomeDetails.push(data[k]);}   
    chinaFemaleTotalIncome += Number(data[k].income);    // ensure numeric addition
}

console.log(chinaFemaleTotalIncome

)