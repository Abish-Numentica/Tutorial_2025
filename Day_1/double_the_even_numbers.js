/*Problem: Create a function that doubles the even numbers in an array.
Input: [2, 5, 8, 9, 4]
Output: [4, 5, 16, 9, 8]*/

function doubleTheEvenNumbers(numbers) {
    // Edge Case: Check for null input
   if (numbers ===""|| numbers==" "){
  console.error("Empty String")
  return false;
  }

    // Edge Case: Check for empty array
    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.error("Empty array");
        return false;
    }

    // Edge Case: Check for non-numeric values
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
            console.error("Non-numerical values present")
            return false;
        }
    }

    let modifiedValues = [];

    // Loop through the array and double the even numbers
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            modifiedValues[i] = numbers[i] * 2; // Double the even number
        } else {
            modifiedValues[i] = numbers[i]; // Keep the odd number unchanged
        }
    }
    console.log(modifiedValues)
    return true;
}

// Test the function
let inputValues = ["a', 'b','c"];
let resultValues = doubleTheEvenNumbers(inputValues);
console.log("The Input Values are: " + inputValues);
console.log("The Result Values are: " + resultValues);
console.log(doubleTheEvenNumbers(["a', 'b','c"]))
console.log(doubleTheEvenNumbers())
console.log(doubleTheEvenNumbers([2, 5, 8, 9, 4]))

