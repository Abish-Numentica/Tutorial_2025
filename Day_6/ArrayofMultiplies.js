/*Array of Multiples
Get the result of the array in multiples
For example: [2, 5];
Result: [2, 4, 6, 8, 10]*/



function arrayOfMultiples(inputFromUser){
    // Edge Case 1: Input is not an array
    if (!Array.isArray(inputFromUser)) {
        console.error("Error: Input must be an array");
        return [];
    }
    // Edge Case 2: Array doesn't have exactly 2 elements
    if (inputFromUser.length !== 2) {
        console.error("Error: Array must contain exactly 2 numbers");
        return [];
    }
    // Edge Case 3: Elements are not numbers
    if (typeof inputFromUser[0] !== 'number' || typeof inputFromUser[1] !== 'number') {
        console.error("Error: Both array elements must be numbers");
        return [];
    }
    // Edge Case 4: Negative numbers
    if (inputFromUser[0] < 0 || inputFromUser[1] < 0) {
        console.warn("Warning: Negative numbers may produce unexpected results");
    }

    temporaryArray=[];
    let temporryVariable=0
 for(i=1;i<=inputFromUser[1];i++)
{
 temporryVariable=inputFromUser[0]
 temporaryArray[i-1]=temporryVariable*i

}
return temporaryArray

}

console.log(arrayOfMultiples([2,6]))
console.log(arrayOfMultiples([3,9]))
console.log(arrayOfMultiples([4,12]))