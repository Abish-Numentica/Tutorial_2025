/*Find all duplicates in an array
Input: [1, 2, 3, 2, 4, 5, 3, 6]
Output: [2, 3]*/



function findDuplicatesinArray(inputFromUser ) {
    // Input validation
    if (!Array.isArray(inputFromUser )) {
        console.error( "Invalid input: Input must be an array.");
         return false;
    }
    // Check for empty array
    if (inputFromUser .length === 0) {
        console.error(  "Empty array provided.");
        return false;
    }
    let duplicateValues = [];
    let sortedArray = inputFromUser .slice().sort(); // Use slice to avoid mutating the original array
    for (let temp = 0; temp < sortedArray.length - 1; temp++) {
        // Check for duplicates and ensure they are added only once
        if (sortedArray[temp] === sortedArray[temp + 1] && !duplicateValues.includes(sortedArray[temp])) {
            duplicateValues.push(sortedArray[temp]);
        }
    }
    // Check if there are no duplicates found
    if (duplicateValues.length === 0) {
        return "No duplicates found.";
    }
    console.log(" The Duplicate Values are :"+ duplicateValues);
    return true
}
// Test cases
console.log(findDuplicatesinArray([1, 2, 3, 2, 4, 5, 3, 6]));

