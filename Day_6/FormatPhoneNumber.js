/*Format phone number
Convert a ten digit number into US phone formatting
For example: 9840164723 to "(984)016-473"
Throw error if it's not a valid phone number
*/

function formatPhoneNumber(phoneNumber) {
    // Input validation
    if (typeof phoneNumber !== 'string') {
        console.error("Error: Phone number must be a string");
        return null;
    }
    
    if (phoneNumber.length !== 10) {
        console.error("Error: Phone number must be 10 digits long");
        return null;
    }
    
    for (let i = 0; i < phoneNumber.length; i++) {
        if (isNaN(phoneNumber[i])) {
            console.error("Error: Phone number must contain only digits");
            return null;
        }
    }

    // Build formatted number with loop
    let formatted = "(";
    
    // Area code (first 3 digits)
    for (let i = 0; i < 3; i++) {
        formatted += phoneNumber[i];
    }
    formatted += ") ";
    
    // Next 3 digits
    for (let i = 3; i < 6; i++) {
        formatted += phoneNumber[i];
    }
    formatted += "-";
    
    // Last 4 digits
    for (let i = 6; i < 10; i++) {
        formatted += phoneNumber[i];
    }
    
    return formatted;
}


console.log(formatPhoneNumber("9840164723"));  // Output

 

