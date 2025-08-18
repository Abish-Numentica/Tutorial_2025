function findTheLargestNumber(inputFromUser, nthLargestNumber) {
  // Check for null or undefined inputs
  if (inputFromUser === null || inputFromUser === undefined) {
    console.error( "Null input or Undefined");
    return false;
  }

  // Check for empty array
  if (!Array.isArray(inputFromUser) || inputFromUser.length === 0) {
    console.error( "Empty array");
    return false;
  }

  // Check if n is within bounds
  if (nthLargestNumber > inputFromUser.length || nthLargestNumber <= 0) {
    console.error( "Enter the correct value within the limit");
    return false;
  }

  // Manually filter out non-numeric values
  let requiredOutput = [];
  for (let i = 0; i < inputFromUser.length; i++) {
    if (typeof inputFromUser[i] === 'number' && !isNaN(inputFromUser[i])) {
      requiredOutput.push(inputFromUser[i]);
      return false;
    }
  }

  // Check if we still have enough numeric values
  if (nthLargestNumber > requiredOutput.length) {
    console.error( "Values are not within the limit");
    return false;
  }

  // Sort the numeric array in descending order using bubble sort
  for (let j = 0; j < requiredOutput.length - 1; j++) {
    for (let k = 0; k < requiredOutput.length - 1 - j; k++) {
      if (requiredOutput[k] < requiredOutput[k + 1]) {
        let temp = requiredOutput[k];
        requiredOutput[k] = requiredOutput[k + 1];
        requiredOutput[k + 1] = temp;
      }
    }
  }

  // Return the Nth largest number
  console.log("The Nth Largest Number in the array: "+ requiredOutput[nthLargestNumber - 1]);
  return true;
}

// Example usage:
findTheLargestNumber([3, 4, 5, 'a', 6, 88], 2);
