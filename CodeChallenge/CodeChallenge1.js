/*Write a elegant solution for the below Acceptance Criteria. Import the json into your js file and start working. Please note that the function you write is generic and the edge cases covered.
Find the country which has the highest income.
Find the country which has the combined highest income
Get all the users info (complete info) who has the email which ends with .gov
Find the country name which has the maximum combined income for Female
Write a program to get paginated result from the json -  getPaginatedResult(pageNumber, pageSize);
For example getPaginatedResult(2, 20) will return result from 21-40 from the json
*/

const data = require('./users-db.json'); // Make sure the filename matches exactly
let highestIncomePerson = data[0]; // Start with the first person

for (let i = 1; i < data.length; i++) {
    if (data[i].income > highestIncomePerson.income) {
        highestIncomePerson = data[i];
    }
}
const country = data.map(countryName => countryName.country); // Extract all names
const uniqueNames = [...new Set(country)];   // Remove duplicates


const countryChinaDetails = [];
let chinaTotalIncome = 0;
const countryChinaFemaleIncomeDetails=[]
let chinaFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {


  const country = data[j].country ? data[j].country.toLowerCase() : null; { // lowercase match
    countryChinaDetails.push(data[j]);}   
    chinaTotalIncome += Number(data[j].income);    // ensure numeric addition
}
console.log(chinaTotalIncome)

for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countryChinaFemaleIncomeDetails.push(data[j]);}   
    chinaFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}

const countryNepalDetails = [];
let nepalTotalIncome = 0;
const countrynepalFemaleIncomeDetails=[]
let nepalFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {
  if (data[j].country.toLowerCase() === "nepal") { // lowercase match
    countryNepalDetails.push(data[j]);
    nepalTotalIncome += Number(data[j].income);    // ensure numeric addition
  }
}

for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countrynepalFemaleIncomeDetails.push(data[j]);}   
    nepalFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}

const countryJapanDetails = [];
let japanTotalIncome = 0;
const countryJapanFemaleIncomeDetails=[]
let japanFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {
  if (data[j].country.toLowerCase() === "japan") { // lowercase match
    countryJapanDetails.push(data[j]);
    japanTotalIncome += Number(data[j].income);    // ensure numeric addition
  }
}
for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countryJapanFemaleIncomeDetails.push(data[j]);}   
    japanFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}

const countryAustraliaDetails = [];
let australiaTotalIncome = 0;
const countryaustraliaFemaleIncomeDetails=[]
let australiaFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {
  if (data[j].country.toLowerCase() === "australia") { // lowercase match
    countryAustraliaDetails.push(data[j]);
    australiaTotalIncome += Number(data[j].income);    // ensure numeric addition
  }
}
for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countryaustraliaFemaleIncomeDetails.push(data[j]);}   
    australiaFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}

const countryPortugalDetails = [];
let portugalTotalIncome = 0;
const countryPortugalFemaleIncomeDetails=[]
let PortugalFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {
  if (data[j].country.toLowerCase() === "portugal") { // lowercase match
    countryPortugalDetails.push(data[j]);
    portugalTotalIncome += Number(data[j].income);    // ensure numeric addition
  }
}
for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countryPortugalFemaleIncomeDetails.push(data[j]);}   
    PortugalFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}


const countryIndaiDetails = [];
let indiaTotalIncome = 0;
const countryIndiaFemaleIncomeDetails=[]
let IndiaFemaleTotalIncome=0;

for (let j = 0; j < data.length; j++) {
  if (data[j].country.toLowerCase() === "india") { // lowercase match
    countryIndaiDetails.push(data[j]);
    indiaTotalIncome += Number(data[j].income);    // ensure numeric addition
  }
}
for (let j = 0; j < data.length; j++) {


  if (data[j].gender.toLowerCase() === "Female") { // lowercase match
    countryIndiaFemaleIncomeDetails.push(data[j]);}   
    IndiaFemaleTotalIncome += Number(data[j].income);    // ensure numeric addition
}

const countryCombinedDetails = [];

for (let j = 0; j < data.length; j++) {
  for (let k = 0; k < uniqueNames.length; k++) {
    if (data[j].country.toLowerCase() === uniqueNames[k].toLowerCase()) {
      countryCombinedDetails.push(data[j]);
      break; // Optional: stop checking once matched
    }
  }
}
 const incomes = {
   China: chinaTotalIncome,
   India: indiaTotalIncome,
   Nepal: nepalTotalIncome,
   Japan: japanTotalIncome,
   Australia: australiaTotalIncome,
   Portugal: portugalTotalIncome
 };

// let highestCountry = "";
// let totalIncome = 0;

// for (const country in incomes) {
//   if (incomes[country] > totalIncome) {
//     totalIncome = incomes[country];
//     highestCountry = country;
//   }
// }

// const femaleIncomes = {
//   China: chinaFemaleTotalIncome,
//   India: IndiaFemaleTotalIncome,
//   Nepal: nepalFemaleTotalIncome,
//   Japan: japanFemaleTotalIncome,
//   Australia: australiaFemaleTotalIncome,
//   Portugal: PortugalFemaleTotalIncome
// };

// let highestFemaleIncomeCountry = "";
// let totalFemaleIncome = 0;

// for (const countryFemale in femaleIncomes) {
//   if (femaleIncomes[countryFemale] > countryFemale) {
//     totalFemaleIncome = totalFemaleIncome[countryFemale];
//     countryFemale = countryFemale;
//   }
// }
// */



// console.log(`Highest total income is ${totalIncome} from ${highestCountry}`);
// console.log(`Highest Female total income is ${totalFemaleIncome} from ${highestFemaleIncomeCountry}`);
// console.log("Highest income person:", highestIncomePerson.country);
// console.log("Income:", highestIncomePerson.income);
// console.table(govtEmailUserDetails)
// console.log(chinaFemaleTotalIncome)

