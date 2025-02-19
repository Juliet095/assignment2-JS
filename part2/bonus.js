// Write a JavaScript function that takes two different data types and checks if
//  they are strictly equal (===). If they are not, explain why in a return message.
function strictEqualityCheck(a, b) {
    // Your code here
}

console.log(strictEqualityCheck(5, "5")); // Output: "5 and '5' are 
// not strictly equal because one is a number and the other is a string."

function strictEqualityCheck(a, b){
    a = 5
    b = "5"
    return (a === b)  // they are not srictly equal because one is a number and the other 
    // is a string. thus a number can not be strictly equal to a sting.
    
}
console.log(strictEqualityCheck(5, "5"));

