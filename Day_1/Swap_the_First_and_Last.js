/*Problem: Swap the first and last items in an array.
Input: [3, 5, 9, 2, 7]
Output: [7, 5, 9, 2, 3]*/

function swapFirstandLast(numbers)
{
    if (numbers ===""|| numbers==" "){
  console.error("Empty String")
  return false;
  }
  if (numbers === null || numbers == undefined) {
       console.error("Null Input or Undefined Iput")
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
let temp=numbers[0]
numbers[0]=numbers[numbers.length-1]
numbers[numbers.length-1]=temp
console.log(numbers);
return true;
}
console.log(swapFirstandLast([-2,2,-1]))
