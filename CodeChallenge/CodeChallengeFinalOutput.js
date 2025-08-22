/*Write a elegant solution for the below Acceptance Criteria. Import the json into your js file and start working. Please note that the function you write is generic and the edge cases covered.
Find the country which has the highest income.
Find the country which has the combined highest income

Find the country name which has the maximum combined income for Female
Get all the users info (complete info) who has the email which ends with .gov
Write a program to get paginated result from the json -  getPaginatedResult(pageNumber, pageSize);
For example getPaginatedResult(2, 20) will return result from 21-40 from the json
*/


const data = require('./users-db.json');


function highestIncomeCountry(inputData){
if (!Array.isArray(inputData) || inputData.length === 0) {
        console.error("No data available.");
        return false;
    }
let highestIncomePerson = data[0]; // Start with the first person

for (let i = 1; i < inputData.length; i++) {
    if (inputData[i].income > highestIncomePerson.income) {
        highestIncomePerson = inputData[i];
    }
}console.log(`Highest Income: ${highestIncomePerson.income} from ${highestIncomePerson.country}`);
return true;
}

function getCountryWithCombinedIncome(inputData){

    
if (!Array.isArray(inputData) || inputData.length === 0) {
      console.error("No data available.");
        return false;
}
    const countryIncome = {};
    for (let i = 0; i < inputData.length; i++) {
        const country = inputData[i].country;
        const income = Number(inputData[i].income);
        if (!countryIncome[country])
            {countryIncome[country] = 0;}
        countryIncome[country] += income;
    
    }
//To find the Country with the highest total volume
    let highestTotalIncome = 0;
    let richestCountry = '';
    for (const country in countryIncome) {
        if (countryIncome[country] > highestTotalIncome) {
            highestTotalIncome = countryIncome[country];
            richestCountry = country;
        }
    }
    console.log("\nCountry with Combined Highest Income:");
    console.log(`Country: ${richestCountry}`);
    console.log(`Total Income: ${highestTotalIncome}`);
     return true;
}

function getCountryWithFemaleCombinedIncome(inputData) {
if (!Array.isArray(inputData) || inputData.length === 0) {
      console.error("No data available.");
        return false;}

  const FemaleIncome = {};

  for (let i = 0; i < inputData.length; i++) {
    const country = inputData[i].country;
    const gender = inputData[i].gender;
    const income = Number(inputData[i].income);

    if (gender && gender.toLowerCase() === "female") {
      if (!FemaleIncome[country]) {
        FemaleIncome[country] = 0;
      }
      FemaleIncome[country] += income;
    }
    
  }

  let highestFemaleIncome = 0;
  let topFemaleCountry = '';

  for (const country in FemaleIncome) {
    if (FemaleIncome[country] > highestFemaleIncome) {
      highestFemaleIncome = FemaleIncome[country];
      topFemaleCountry = country;
    }
  }

  console.log("\nCountry with Highest Female Combined Income:");
  console.log(`Country: ${topFemaleCountry}`);
  console.log(`Female Income: ${highestFemaleIncome}`);
  return true;
}


function userInfoForGovEmail(inputData){

    if (!Array.isArray(inputData) || inputData.length === 0) {
       console.error("No data available.");
        return false;}

const govtEmailUserDetails = [];
for (let i = 0; i < inputData.length; i++) {
  const email = inputData[i].email;

  if (typeof email === "string" && email.toLowerCase().endsWith(".gov"))
     {
    govtEmailUserDetails.push(inputData[i]);
     }
}
console.table(govtEmailUserDetails)
return true;
}

function getPaginatedResult(data, pageNumber, pageSize) {
  if (!Array.isArray(data) || data.length === 0) return console.error("Empty Values");
  if (typeof pageNumber !== 'number' || typeof pageSize !== 'number') return console.error("Invalid Page Number");
  if (pageNumber < 1 || pageSize < 1) return console.error("Enter the Page Number and Size Accordingly");


const startIndex = (pageNumber - 1) * pageSize;
const endIndex = startIndex + pageSize;
for (let i = startIndex; i < endIndex && i < data.length; i++) {
    result.push(data[i]);
  }

  return result;;
}




highestIncomeCountry(data)
userInfoForGovEmail(data)
getCountryWithCombinedIncome(data)
getCountryWithFemaleCombinedIncome(data)
console.table(getPaginatedResult(data,2, 20))
