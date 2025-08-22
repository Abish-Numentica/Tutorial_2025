/*Merge two arrays and sort them from lowest to highest
Input: [1, 4, 6], [2, 5, 3]
Output: [1, 2, 3, 4, 5, 6]*/


function mergingofArrays(firstArrayInput,secondArrayInput)
{
 if (!Array.isArray(firstArrayInput) || !Array.isArray(secondArrayInput)) {
        console.error( "Invalid input: Both inputs must be arrays.");
        return false
    }
if (firstArrayInput.length === 0||secondArrayInput===0) {
        console.error( "Empty output: The merged array is empty.");
     return false}

console.log(firstArrayInput,secondArrayInput)

for(i=0;i<secondArrayInput.length;i++)
{
firstArrayInput[firstArrayInput.length]=secondArrayInput[i]
}


//This loop to combine two arrays
let sortingofArray=[];
sortingofArray=firstArrayInput;
for (let j = 0; j < sortingofArray.length - 1; j++) {                      
            for (let k = 0; k < sortingofArray.length - 1; k++) {  
                if (sortingofArray[k] > sortingofArray[ k+ 1]) { 
                    temp = sortingofArray[k];
                    sortingofArray[k] = sortingofArray[k + 1];
                    sortingofArray[k + 1] = temp; 
                }
            }
        }

//this loop is to sort the values in array  
for (let j = 0; j < sortingofArray.length - 1; j++) {                      
            for (let k = 0; k < sortingofArray.length - 1; k++) {
                if (sortingofArray[k] > sortingofArray[ k+ 1]) {
                   let  temp = sortingofArray[k];
                    sortingofArray[k] = sortingofArray[k + 1];
                    sortingofArray[k + 1] = temp;
                }
            }
        }

console.log(sortingofArray)
return true
}
console.log(mergingofArrays([1, 4, 6], [2, 5, 3]))