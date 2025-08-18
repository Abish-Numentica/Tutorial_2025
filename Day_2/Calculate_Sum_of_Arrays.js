/*Calculate the sum of numbers in a comma-separated string
Input: "1.5,a, 2, 44, 66, 12, 90"
Output: 215.5*/

function sumOfNumbersinArray(inputData){
 if (inputData === "") {
        console.error( "Empty String");
        return false;
      }  
else
{
const convertedArrayInput = inputData.split(','); 
let tempValue=0;  // Initialize sum variable
for (let i = 0; i < convertedArrayInput.length; i++) {
       const number = parseFloat(convertedArrayInput[i].trim()); // Trim and convert to float
//split the string and converted to array


        // Check if the conversion is a valid number
        if (!isNaN(number)) {
            tempValue += number; // Sum the valid numbers
        } else {
            console.log("The non-numeric character in the given input is: " + convertedArrayInput[i]);
        }
    }
    // Output the sum
    if (tempValue !== 0) {
        console.log("The Sum of Numbers is: " + tempValue); // Output: Temp value gives the sum
        console.log(tempValue); // Return the sum
        return true;
    } else {
        console.log("No valid numbers found to sum.");
        return false;
    }
}
}

sumOfNumbersinArray("1.5,a, 2, 44, 66, 12, 90")

