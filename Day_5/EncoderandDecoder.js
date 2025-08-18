/* Encoder and Decoder
Encode a string in such a way that the output will be the next characters given as input
For example:
encode(“arun”, 2)  -> ctwp
encode(“arun”, 4) -> evyr
And similarly decode will return the opposite
decode(“ctwp”, 2) -> arun
decode(“evyr”, 4) -> arun*/



function encodingofArray(inputfromUser,number){
   // Edge Case 1: Input is not a string
    if (typeof inputfromUser !== 'string') {
        console.error("Error: Input must be a string");
        return false;
    }
    // Edge Case 2: Shift is not a number
    if (typeof number !== 'number') {
        console.error("Error: Shift must be a number");
        return false 
    }
let arrayofValues=[]
let i;
let upperCaseArray=[]
let lowerCaseArray=[]
// Using for loop for (A-Z):
j=0;
for (i = 65; i <= 90; i++) {    
   upperCaseArray[j]=String.fromCharCode(i);
   j++
}
// Using for loop for (a-z):
l=0;
for (k = 97; k <= 122; k++) {  
   lowerCaseArray[l]=String.fromCharCode(k);
   l++
} 
inputfromUser=inputfromUser.toLowerCase()
    for(temp1=0;temp1<lowerCaseArray.length;temp1++)
    {
       for(temp2=0;temp2<lowerCaseArray.length;temp2++){
      if(inputfromUser[temp1]===lowerCaseArray[temp2]){
        arrayofValues+=lowerCaseArray[temp2+number]
 }}}console.log(`The Encoding of Given Array ${inputfromUser} : ${arrayofValues}`)
 
  return true
}
function decodingofArray(inputfromUser,number){
     if (typeof inputfromUser !== 'string') {
        console.error("Error: Input must be a string");
        return false;
    }
    // Edge Case 2: Shift is not a number
    if (typeof number !== 'number') {
        console.error("Error: Shift must be a number");
        return false 
    }
let arrayofValues=[]
let i;
let upperCaseArray=[]
let lowerCaseArray=[]
// Using for loop for (A-Z):
j=0;
for (i = 65; i <= 90; i++) {    
   upperCaseArray[j]=String.fromCharCode(i);
   j++
}
// Using for loop for (a-z):
l=0;
for (k = 97; k <= 122; k++) {   
   lowerCaseArray[l]=String.fromCharCode(k);
   l++
} 
inputfromUser=inputfromUser.toLowerCase()
    for(temp1=0;temp1<lowerCaseArray.length;temp1++)
    {
       for(temp2=0;temp2<lowerCaseArray.length;temp2++){
      if(inputfromUser[temp1]===lowerCaseArray[temp2]){
        arrayofValues+=lowerCaseArray[temp2-number]
 }}}console.log(`The Decoding of Given Array ${inputfromUser} : ${arrayofValues}`)
 return true
}
console.log(encodingofArray("arun", 2));
console.log(encodingofArray("arun", 4));
console.log(decodingofArray("evyr", 4));
console.log(decodingofArray("Ctwp", 2));
