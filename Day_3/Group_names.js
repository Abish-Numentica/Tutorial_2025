/*2. Group names according to the initial character
Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
Output
["arun", "aadhir", "aariketh"]
["balu"]
["cathy"]
["krish", "kamal"]*/


function groupNames(names) {
    const groups = {};
    if (!Array.isArray(names)) {
        console.error("Error: Input must be an array");
        return false;
    }
    // Edge Case 2: Empty array input
    if (names.length === 0) {
        console.warn("Warning: Received empty array");
        return false;
    }
    // Group names by first letter
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name[0].toLowerCase(); // Get first character (case insensitive)
        
        if (!groups[firstLetter]) {
            groups[firstLetter] = [];  // Initialize array if it doesn't exist
        }
        groups[firstLetter].push(name);
    }
    
    // Convert the object to an array of arrays
    return Object.values(groups);
}

// Example usage
const input = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];
const result = groupNames(input);
console.log(result);
