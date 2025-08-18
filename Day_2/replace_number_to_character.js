/*Replace all numbers in a string with a given character
Input: replaceNumbers("arun@123", "d")
Output: "arun@ddd"*/


/*let b;
let theinputbe="arun@123";
b=theinputbe.replace(/\d/g,'d')
console.log(b)*/


function replaceNumberwithStrings(inputFromUser , replacementChar) {
    // Input validation
    if (typeof inputFromUser  !== 'string') {
        console.error( "Invalid input: Input must be a string.");
        return false;
    }
    if (replacementChar === undefined || replacementChar === null) {
        console.error( "Invalid input: Replacement character must be provided.");
        return false;
    }
    if (inputFromUser  === "") {
        console.error( "Empty string provided.");
        return false;
    }
    let outputForInput = '';
    for (let j = 0; j < inputFromUser .length; j++) {
        if (isNaN(inputFromUser [j]) || inputFromUser [j] === ' ') {
            outputForInput += inputFromUser [j]; // Keep non-numeric characters
        } else {
            outputForInput += replacementChar; // Replace numbers with the specified character
        }
    }
    console.log("The Required Output: "+outputForInput);
    return true;
}
// Test cases
console.log(replaceNumberwithStrings("arun@123", "d")); 