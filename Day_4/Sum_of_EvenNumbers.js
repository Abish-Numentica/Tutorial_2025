/* Find the sum of even numbers in an array. find all the even numbers in an array and add them
For example
findEvenSum([38, 3, 2, 8, 31])*/

function sumOfEvenNumbers(numbers)
{
    // Edge Case 1: Input is not an array
    if (!Array.isArray(numbers)) {
        console.error("Error: Input must be an array");
        return 0;
    }
    // Edge Case 2: Empty array
    if (numbers.length === 0) {
        console.warn("Warning: Received an empty array");
        return 0;
    }
    // Edge Case 3: Array with non-numeric values
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            console.warn(`Warning: Skipping non-numeric value at index ${i}: ${numbers[i]}`);
        }
    }
   let temporaryArray=[];
   for(i=0;i<numbers.length;i++)
    {
    if(numbers[i]%2==0)
    {
        temporaryArray.push(numbers[i])
      
    }
}
let sumOfEvenVarables = 0;
for (let i = 0; i < temporaryArray.length; i++) {
    sumOfEvenVarables += temporaryArray[i];
}
return sumOfEvenVarables
}
inputFromUser=[38, 3, 2, 8, 31];
console.log("The Sum of the Even Numbers in the Give Input :"+sumOfEvenNumbers([38, 3, 2, 8, 31]))