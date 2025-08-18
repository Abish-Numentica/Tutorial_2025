/*Problem: Write a function to count the number of vowels in a string.
Input: "numentica ui"
Output: 6*/

function inputFromUser(sentence){

  if (sentence ===""|| sentence==" "){
  console.error("Empty String")
  return false;
  }

  if (typeof sentence === 'number' || !isNaN(sentence)) {
console.error("Number present is Present in the String")
  return false;
}


    let countOfVowels=[]
    let checkingWithVowels=['a','i','e','o','u']
   
    for(let i=0;i<sentence.length;i++)
{
    for(let j=0;j<sentence.length;j++) 
    {
       if( sentence[i]==checkingWithVowels[j]  )
       {
         countOfVowels.push(checkingWithVowels[j])
       }
     }
    }
    console.log("The Number of Vowels in the Given String : "+countOfVowels.length)
    return true
}
(inputFromUser("numentica ui"))
inputFromUser("")
inputFromUser("123456")
inputFromUser(" ")
