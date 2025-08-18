/*Input: [68, 71, 69, 73]
Output: missing numbers in range [68-73] is 70, 72*/

function findMissingNumbers(inputFromUser){

let missingNumbers = [];
let lowestNumber= inputFromUser[0]
let highestNumber=inputFromUser[0] 


 if (inputFromUser === ""){
        console.error( "Empty String");
        return false;}

 if (inputFromUser=== null || typeof inputFromUser===undefined) {
        console.error( "Null input");
        return false;}

else
for (let i = 0; i <=inputFromUser.length; i++) {           //to determine the lowest number in an array
    if (inputFromUser [i] < lowestNumber) {
        lowestNumber = inputFromUser [i]; 
    }
}


for (let k = 0; k <= inputFromUser.length; k++) {          //to determine the highest number in an array
    if (inputFromUser [k] > highestNumber) {
        highestNumber= inputFromUser[k]; 
    }
}


for(let j=lowestNumber ;j <highestNumber; j++) {      
    if (inputFromUser.indexOf(j) == -1)    //To check the Missing numbers        
    {
        missingNumbers.push(j);    
    }
} 
console.log("The Missing Numbers are: " +missingNumbers);
return true;
}


findMissingNumbers([68, 71,69, 73,60, 'ab']);


