/*3. Problem: Create a function that returns the second largest number in an array.
Input: [1, 45, 32, 76, 23]
Output: 45 */

function nthLargestNumber(sortedarray,nthnumber)
{
       // Edge Case: Check for null input
   if (sortedarray ===""|| sortedarray==" "){
  console.error("Empty String")
  return false;
  }

    // Edge Case: Check for empty array
    if (!Array.isArray(sortedarray) || sortedarray.length === 0) {
        console.error("Empty array");
        return false;
    }

    // Edge Case: Check for non-numeric values
    for (let i = 0; i < sortedarray.length; i++) {
        if (typeof sortedarray[i] !== 'number' || isNaN(sortedarray[i])) {
            console.error("Non-numerical values present")
            return false;
        }
    }
    for (let j = 0; j < sortedarray.length - 1; j++) {
           
            for (let k = 0; k < sortedarray.length - 1; k++) {
                
                if (sortedarray[k] < sortedarray[ k+ 1]) {
                    
                    temp = sortedarray[k];
                    sortedarray[k] = sortedarray[k + 1];
                    sortedarray[k + 1] = temp;         //to sort the array in descending order
                  
                }
               
            }
        }
        console.log("The Nth Largest Number in an array:" +sortedarray[nthnumber-1]) //Output
        return true              

    }
       
console.log(nthLargestNumber([1, 45, 32, 76, 23],2))
