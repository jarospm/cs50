import { getString } from "../get-string.js";

let name = await getString("What is your name? ");

console.log(name);

// Custom function to determines the length of a string.
custLength(name);

function custLength(string) {
    let whileLength = 0;
    while (name[whileLength] !== undefined) {
        whileLength ++;
    }
    console.log("cust length: ", whileLength);
}

// Custom funcitons to uppercase a string
custUpCase(name);

function custUpCase(string) {
    let result = ""; 

    // loop through each character and manually convert to uppercase
    for (let i = 0; i < string.length; i ++) {
        let char = string[i];

        // check if the character is a lowercase letter
        if ( char >= 'a' && char <= 'z') {
            result += String.fromCharCode(char.charCodeAt(0) - 32);  //convert to uppercase
        } else {
            result += char; // leave non-lowercase character unchanged
        }
    }
    console.log("cust uppercase: ", result);
}


// .length is always available as a built-in property of strings
console.log("check length: ", name.length);

// string length is calculated once when the string is created 
// and stored as a PROPERTY of the string object 

// string objects also have build-in string METHODS
console.log("check uppercase: ", name.toUpperCase());
console.log("check lowercase: ", name.toLowerCase());

// object METHODS, unlike properties, are FUNCTIONS shared across all string instances
// they are not stored in each string object, but accessed through the prototype chain when called
// each method performs its calculation on demand, returning a new string
console.log(String.prototype.toUpperCase.toString());
console.log(String.prototype.toLowerCase.toString());

// String.prototype contains all the built-in methods and properties available to every string
// think of it as a blueprint that JavaScript uses to create all string objects
// any string in JavaScript automatically gets access to all these properties and methods
console.log(Object.getOwnPropertyNames(String.prototype));

