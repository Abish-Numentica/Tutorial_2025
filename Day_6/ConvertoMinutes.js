/*Convert to minutes
Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
Try with different hours and minutes and cover all possible negative cases
*/





function converToMinutes(inputFromUser){

     // Edge Case 1: Input is not a string
    if (typeof inputFromUser  !== 'string') {
        console.error("Error: Input must be a string");
        return false;
    }
    // Edge Case 2: Invalid format (not containing ':')
    if (!inputFromUser .includes(':')) {
        console.error("Error: Input must be in the format 'H:M")
        return false;
    }
let arrayData=[];
let requiredOutput;
arrayData=inputFromUser.split(":")
let hours;
hours=60;
requiredOutput=parseInt(arrayData[0]*60)+parseInt(arrayData[1])

return requiredOutput



}

console.log(converToMinutes("2:30")+" Minutes")
console.log(converToMinutes("12:00")+" Minutes")

