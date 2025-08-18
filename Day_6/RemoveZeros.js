/*Remove zeros either trailing / leading
Input - "000000123423423000"
removeZeros(input, "leading") // output 123423423000
removeZeros(input, "trailing") // output 000000123423423
You can use Array push, concat, pop and String methods. But you have to make sure to explain what the function is doing.*/



function removeZeros(input, mode) {
  // Edge Case 1: Input is not a string
    if (typeof input !== 'string') {
        return "Error: Input must be a string.";
    }
    // Edge Case 2: Mode is not valid
    if (mode !== "leading" && mode !== "trailing") {
        return "Error: Invalid mode. Use 'leading' or 'trailing'.";
    }
    // Edge Case 3: Input is empty
    if (input.length === 0) {
        return "Error: Input cannot be an empty string.";
    }
    // Edge Case 4: Input contains only zeros
    if (/^0+$/.test(input)) {
        return "0"; // Return a single zero if the input is all zeros
    }
  if (mode === "leading") {
    // Remove leading zeros using regex
    return input.replace(/^0+/, '');
  } else if (mode === "trailing") {
    // Remove trailing zeros using regex
    return input.replace(/0+$/, '');
  } else {
    return "Invalid mode. Use 'leading' or 'trailing'.";
  }
}

// Example usage:
let input = "000000123423423000";
console.log(removeZeros(input, "leading"));   // Output: "123423423000"
console.log(removeZeros(input, "trailing"));  // Output: "000000123423423"