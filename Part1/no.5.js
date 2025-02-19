// Explain the concept of type coercion in JavaScript. Provide an example of implicit type coercion.
// Type Coercion refers to the process of automatic or implicit conversion of values from 
// one data type to another.
//  This includes conversion from Number to String, String to Number, Boolean to Number
// example.
// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings   
let x = 10 + '20';
let y = '20' + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
let z = true + '10';

console.log(x);
console.log(y);
console.log(z);
