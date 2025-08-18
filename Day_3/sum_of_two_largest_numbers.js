/*Return the sum of two largest numbers
Input: [32, 66, 80, 120, 45]
Output: 200*/

user_input=[32, 66, 90, 120, 45]


function sortingOfarray(inputFromUser){


// Edge Case 1: Input is not an array
    if (!Array.isArray(inputFromUser )) {
        console.error("Error: Input must be an array");
        return false;
    }
    // Edge Case 2: Empty array
    if (inputFromUser .length === 0) {
        console.error("Empty Array");
        return false;
    }
    // Edge Case 3: Array with less than two elements
    if (inputFromUser .length < 2) {
        console.error("Array must contain at least two elements to find the two largest numbers");
        return false;
    }
   
let userOutput=[];
for(let i=0;i<inputFromUser.length-1;i++)
{
    for(let j=0;j<inputFromUser.length;j++)
    {
        if(inputFromUser[j]<inputFromUser[j+1])
        {
            let temp=inputFromUser[j]
            inputFromUser[j]=inputFromUser[j+1]
            inputFromUser[j+1]=temp

              
        }
    }
    
}

for(let m=0;m<inputFromUser.length;m++){
         
        userOutput[m]=inputFromUser[m]
}
console.log("The Sorterd Array:" + userOutput);
return userOutput;
}

function sumOfTwoLargestnumber(sortedArray,n){

let required_output=" "
required_output=sortedArray[n-1]+sortedArray[n-2]
console.log("The Sum of 2 Largest Numbers are :"+ required_output)
return true;
}


sortedArray=sortingOfarray([32, 66, 90, 120, 45])
console.log(sumOfTwoLargestnumber(sortedArray,2))




