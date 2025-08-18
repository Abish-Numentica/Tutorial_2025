/*Template String Replace
For example:
const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723
*/


function replaceTemplateString(template, replacements) {
    // Edge Case 1: Check if template is a string
    if (typeof template !== 'string') {
        console.log("Template must be a string.");
        return false;
    }
    // Edge Case 2: Check if replacements is an array
    if (!Array.isArray(replacements)) {
        console.log("The Sentennce should be in Array");
        return false;
    }
    // Edge Case 3: Check if replacements array is empty
    if (replacements.length === 0) {
        console.log("No Replacement"); 
        return false;

    }


    let result = template;
    let convertedArrayToString=result.split("#")
    console.log(convertedArrayToString)
    for (let i = 0; i < replacements.length; i++) {


        const key = replacements[i][0];
        const value = replacements[i][1];
        const placeholder = "#["+key+"]";

            result=result.replaceAll(placeholder,value);
        
    }
    
    return result;
}

const template = "Numentica is located in #[location] #[state] #[phone]";
const replacements = [
    ["location", "Chennai"],
    ["state", "Tamil Nadu"],
    ["phone", "9840164723"]
];
console.log(replaceTemplateString(template, replacements))