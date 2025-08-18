/*Find sum of multiples
For example
findSum(5, 5) should return 5+10+15+20+25=75
findSum(8, 3) should return 8+16+24=48*/
function sumOfMultiplies(getinputfromuser,inputMultplier){

    // Edge Case 1: Empty array
    if (getinputfromuser.length === 0) {
        console.error("Empty array");
        return 0;
    }
    // Edge Case 2: Array with non-numeric values
    for (let i = 0; i < getinputfromuser.length; i++) {
        if (typeof numbers[i] !== 'number') {
            console.warn(`Warning: Skipping non-numeric value at index ${i}: ${numbers[i]}`);
        }
    }
let temporryVariable=0;
for(let i=0;i<inputMultplier;i++)
{
    
    {
        temporryVariable+=getinputfromuser+(getinputfromuser*i);
    
}
} return temporryVariable;
}

console.log("The sum of Multiplies of Given Input(5,5) :"+ sumOfMultiplies(5,5))
console.log("The sum of Multiplies of Given Input(8,3) :" +sumOfMultiplies(8,3))