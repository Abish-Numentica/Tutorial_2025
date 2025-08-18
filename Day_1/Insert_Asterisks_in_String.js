function padWithStars(word, number) {
    // Edge Case 1: Handle undefined/null word
    if (word === null || word === undefined) {
        console.error( "Invalid word input");
        return false;
    }

    // Edge Case 2: Handle non-string word input
    if (typeof word !== 'string') {
      console.error("Word must be a string");
      return false;
    }

    // Edge Case 3: Handle empty string
    if (word === '') {
        console.error("Word cannot be empty");
        return false;
    }

    // Edge Case 4: Handle invalid number input
    if (typeof number !== 'number' || isNaN(number) || !Number.isInteger(number) || number < 0) {
        console.error("Number must be a non-negative integer");
        return false;
    }

    // Edge Case 5: Zero asterisks case
    if (number === 0) {
        console.error("Value is Zero");
        return false;
    }

    // Create the asterisk padding
    const asterisks = '*'.repeat(number);
    
    // Return the padded string
    console.log(asterisks + word + asterisks);
    return true;
}

// Test cases including edge cases
console.log(padWithStars("code", 3));       // "***code***"
console.log(padWithStars("hello", 2));      // "**hello**"
console.log(padWithStars(null, 3));         // "Invalid word input"
console.log(padWithStars(undefined, 1));    // "Invalid word input"
console.log(padWithStars(123, 2));          // "Word must be a string"
console.log(padWithStars("", 4));           // "Word cannot be empty"
console.log(padWithStars("test", "2"));     // "Number must be a non-negative integer"
console.log(padWithStars("test", -1));      // "Number must be a non-negative integer"
console.log(padWithStars("test", 0));       // "test"
console.log(padWithStars("test", 1.5));     // "Number must be a non-negative integer"
