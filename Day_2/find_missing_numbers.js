/*Input: [68, 71, 69, 73]
Output: missing numbers in range [68-73] is 70, 72*/

function findMissingNumbers(inputFromUser ) {
    let missingNumbers = [];
    let lowestNumber = inputFromUser [0];
    let highestNumber = inputFromUser [0];

    // Check for null or undefined input
    if (inputFromUser  === null || typeof inputFromUser  === 'undefined') {
        console.error("Null input or undefined");
        return false;
    }

    // Check for empty array
    if (inputFromUser .length === 0) {
        console.error("Empty Array");
        return false;
    }

    // Determine the lowest and highest numbers in the array
    for (let i = 0; i < inputFromUser .length; i++) {
        if (typeof inputFromUser [i] !== 'number') {
            console.error("Invalid input: All elements must be numbers.");
            return false;
        }
        if (inputFromUser [i] < lowestNumber) {
            lowestNumber = inputFromUser [i];
        }
        if (inputFromUser [i] > highestNumber) {
            highestNumber = inputFromUser [i];
        }
    }

    // Find missing numbers in the range
    for (let j = lowestNumber; j < highestNumber; j++) {
        if (inputFromUser .indexOf(j) === -1) { // Check for missing numbers
            missingNumbers.push(j);
        }
    }

    // Output the missing numbers
    if (missingNumbers.length > 0) {
        console.log("The Missing Numbers are: " + missingNumbers.join(', '));
    } else {
        console.log("No missing numbers in the range.");
    }

    return true;
}

// Example usage
findMissingNumbers([68, 71, 69, 73]);
