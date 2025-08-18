/*Problem: Find common elements in three arrays.
Input: [1, 2, 3], [2, 3, 4], [0, 2, 5, 3]
Output: [2, 3] */


function getCommonElementsinArray(firstArray,secondArray,thirdArray)
{
    
let consolidatedFirstandSecondarray=[];
let consolidatedFinalArray=[]

for(i=0;i<firstArray.length;i++){
    for(j=0;j<secondArray.length;j++){
         if(firstArray[i]==secondArray[j]){
          consolidatedFirstandSecondarray.push(firstArray[i])
}    }   }


for(i=0;i<thirdArray.length;i++){
    for(j=0;j<thirdArray.length;j++){
if(thirdArray[i]==consolidatedFirstandSecondarray[j])
{
consolidatedFinalArray.push(thirdArray[i])


}}}

    // Edge Case: Check for empty array
    if (!Array.isArray(consolidatedFinalArray) || consolidatedFinalArray.length === 0) {
        console.error("Empty array");
        return false;
    }
    // Edge Case: Check for Boolean
    if(typeof consolidatedFinalArray === 'boolean') {
                    console.error ("Boolean values are present in the arrays");
                    return false;
    }
/* // Edge Case: Check for non-numeric values
    for (let i = 0; i < consolidatedFinalArray.length; i++) {
        if (typeof consolidatedFinalArray[i] !== 'number' || isNaN(consolidatedFinalArray[i])) {
            return "Non-numerical values present";
        }
    }

*/
console.log("The Common Between Three Arrays are:"+consolidatedFinalArray)
return true
}
firstArray=[1, 2,'a', 3]
secondArray= [2, 3,'a', 4]
thirdArray=[0, 2,'a', 5, 3]
getCommonElementsinArray(firstArray,secondArray,thirdArray)