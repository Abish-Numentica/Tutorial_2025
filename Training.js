const data = require('./users-db.json'); // Ensure filename matches


// Initialize income trackers
const totalIncomes = {};
const femaleIncomes = {};

for (const country of uniqueCountries) {
  totalIncomes[country] = 0;
  femaleIncomes[country] = 0;
}

// Aggregate income data
for (const person of data) {
  const country = person.country;
  const income = Number(person.income);
  const gender = person.gender?.toLowerCase();
  const email = person.email?.toLowerCase();

  if (!isNaN(income)) {
    if (country in totalIncomes) {
      totalIncomes[country] += income;
    }

    if (gender === "female" && country in femaleIncomes) {
      femaleIncomes[country] += income;
    }
  }

  if (email && email.endsWith(".gov")) {
    govtEmailUserDetails.push(person);
  }
}

// Find country with highest total income
let highestCountry = "";
let highestIncome = 0;
for (const country in totalIncomes) {
  if (totalIncomes[country] > highestIncome) {
    highestIncome = totalIncomes[country];
    highestCountry = country;
  }
}

// Find country with highest female income
let highestFemaleCountry = "";
let highestFemaleIncome = 0;
for (const country in femaleIncomes) {
  if (femaleIncomes[country] > highestFemaleIncome) {
    highestFemaleIncome = femaleIncomes[country];
    highestFemaleCountry = country;
  }
}

// Output results
console.log(`Highest total income is ${highestIncome} from ${highestCountry}`);
console.log(`Highest female total income is ${highestFemaleIncome} from ${highestFemaleCountry}`);
console.log("Highest income person:", highestIncomePerson.country);
console.log("Income:", highestIncomePerson.income);
console.log(`Total users with .gov emails: ${govtEmailUserDetails.length}`);
console.table(govtEmailUserDetails);