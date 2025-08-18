/*Find the characters that are repeating the most simaltaneously
For example:
charRepeating(“traaainngfornewbie”);
Output: a
// since a has more repeating simaltaneously*/

function charRepeating(inputFromUser){
  // Edge Case 1: Input is not a string
    if (typeof inputFromUser  !== 'string') {
        console.error("Error: Input must be a string");
        return false;
    }
    // Edge Case 2: Empty string
    if (inputFromUser .length === 0) {
        console.error("Empty string");
        return false;
    }
    // Edge Case 3: String with no repeating characters
    if (inputFromUser .length === 1) {
        console.error("Only one character in String");
        return false;
    }
let maxChar = '';
let maxCount = 0;
let currentChar = '';
let currentCount = 1;

for (let i = 0; i < inputFromUser.length; i++) {
  if (inputFromUser[i] === inputFromUser[i + 1]) {
    currentCount++;
    currentChar = inputFromUser[i];
  } else {
    if (currentCount > maxCount && currentCount > 1) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
    currentCount = 1;
  }
}
console.log(`"${maxChar}" appears consecutively most times (${maxCount} times)`);}

const inputFromUser = "traaaibbbbbbbbcccccccccnngfornewbie";

charRepeating(inputFromUser)