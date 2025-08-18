/* Problem: Write a function to sum all numbers in an array except the largest.
Input: [10, 20, 30, 40]
Output: 60 (sum of 10 + 20 + 30) */
function sumOfAllNumbersExceptLargest(numbers)
{
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
    let modifiedArraywithoutLargestValue=[]
for(i=0;i<numbers.length-1;i++){
    if(numbers[i]<numbers[i+1]){

        modifiedArraywithoutLargestValue.push(numbers[i])
    }
    else{
        modifiedArraywithoutLargestValue.push(numbers[i+1])
    }
}
let sumOftheValues=0
for(let j=0;j<modifiedArraywithoutLargestValue.length;j++)
{
sumOftheValues=sumOftheValues+modifiedArraywithoutLargestValue[j]
}
console.log("The Sum of the Three Values are :" + sumOftheValues)
return true
}
console.log(sumOfAllNumbersExceptLargest([10, 20, 30, 40]))