/*Problem: Write a function to capitalize the first letter of each word in a sentence.
Input: "hello from nui"
Output: "Hello From Nui" */


function splitSentenceWithForLoop(sentence) {
  const words = []; // Create an empty array to store the words.
  let currentWord = ""; // Initialize an empty string to build each word.

if (sentence ===""){
  console.error("Empty String")
  return false;
  }
if (sentence=== null|| sentence==undefined) {
       console.error("Null Input or Undefined Iput")
  return false;
 } 
if (typeof sentence === 'number' || !isNaN(sentence)) {
console.error("Number present is Present in the String")
  return false;
}


  for (let i = 0; i < sentence.length; i++) { // Loop through each character of the sentence.
    const char = sentence[i]; // Get the current character.

    if (char === " ") { // Check if the character is a space (our delimiter).
      if (currentWord !== "") { 
        currentWord=currentWord.charAt(0).toLocaleUpperCase()+currentWord.slice(1)// If the current word is not empty, push it to the words array.
        words.push(currentWord);
        
        
      }
      currentWord = ""; // Reset the current word to an empty string.
    } else {
      currentWord += char; // If not a space, append the character to the current word.
    }
  }

  // After the loop, add the last word if it's not empty (handles the case where the sentence doesn't end with a space).
  if (currentWord !== "") {
    currentWord=currentWord.charAt(0).toLocaleUpperCase()+currentWord.slice(1)
    words.push(currentWord);
    words.join(" ")
    output = words.join(" ")
  }
  
  {
  console.log("The Output for the given sentence "+output)
  return true;
}
}


console.log(splitSentenceWithForLoop("123"));
console.log(splitSentenceWithForLoop("hello from nui"));
console.log(splitSentenceWithForLoop(""))
console.log(splitSentenceWithForLoop(null))



