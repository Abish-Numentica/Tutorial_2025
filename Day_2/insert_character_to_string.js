/*Add "@" after each occurrence of character "c" in a string
Input: "cat in the bag"
Output: "c@at in the bag"*/



function addCharactertoString(inputFromUser ) {
    // Check if the input is a string
    if (typeof inputFromUser  !== 'string') {
        console.error( "Invalid input type. Please provide a string.");
        return false;
    }
    // Check for empty string
    if (inputFromUser  === "") {
        console.error(  "Empty String");
         return false;
    }
    let requiredOutput = "";
    // Iterate through each character in the input string
    for (let i = 0; i < inputFromUser .length; i++) {
        requiredOutput += inputFromUser [i]; // Add the current character to the output
        // If the current character is 'c', add '@' after it
        if (inputFromUser [i] === 'c') {
            requiredOutput += '@';
        }
    }
    console.log(requiredOutput);     // Return the modified string
     return true;
}
// Test cases
console.log(addCharactertoString("cat in the bag"));