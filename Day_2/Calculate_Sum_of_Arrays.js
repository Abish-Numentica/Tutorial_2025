/*Calculate the sum of numbers in a comma-separated string
Input: "1.5,a, 2, 44, 66, 12, 90"
Output: 215.5*/

function sumOfNumbersInArray(inputData) {
    // Check if the input string is empty
    if (inputData === "") {
        console.error("Empty String");
        return false;
    } else {
        // Split the input string into an array
        const convertedArrayInput = inputData.split(',');
        let sum = 0; // Initialize sum variable
        // Iterate through the array
        for (let i = 0; i < convertedArrayInput.length; i++) {
            const number = parseFloat(convertedArrayInput[i].trim()); // Trim and convert to float
            // Check if the conversion is a valid number
            if (!isNaN(number)) {
                sum += number; // Sum the valid numbers
            } else {
                console.log("The non-numeric character in the given input is: " + convertedArrayInput[i]);
            }
        }
        // Output the sum
        if (sum !== 0) {
            console.log("The Sum of Numbers is: " + sum); // Output: Sum of valid numbers
            return sum; // Return the sum
        } else {
            console.log("No valid numbers found to sum.");
            return false;
        }
    }
}
// Example usage
sumOfNumbersInArray("1.5,a, 2, 44, 66, 12, 90");