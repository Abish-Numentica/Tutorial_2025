/* Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];*/




function filterOutInvalidItems(inputFromUser,typeOfRemove){
 
  // Edge case: input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error(  "Input is not an array");
    return false;
  }

  // Edge case: empty array
  if (inputFromUser.length === 0) {
    console.error(  "Empty array");
    return false;
  }

  // Edge case: typeToRemove not provided
  if (typeof typeOfRemove !== 'string') {
    console.error( "Invalid type to remove");
    return false;
  }
    let outputForInput = [];
for (let j = 0; j < inputFromUser.length; j++) {
    
    if (typeof inputFromUser[j] !== typeOfRemove) {
       
        outputForInput.push(inputFromUser[j]);
    }}
    // Edge case: Output has no value
    if(outputForInput.length==0)
        {
    console.error(  "Empty array");
    return false;}
    else console.log("The Filterd Output: " +outputForInput);
         return true;
}


console.log(filterOutInvalidItems([0], "number")); 




