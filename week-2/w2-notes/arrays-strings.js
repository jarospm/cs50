let c1 = "H";
let c2 = "I";
let c3 = "!";

console.log(c1, c2, c3);

// the equivalent of C printf("%i %i %i\n", c1, c2, c3); ...
// charCodeAt method retrieves the UTF-16 value of a character at the specified string index.
console.log(c1.charCodeAt(0), c2.charCodeAt(0), c3.charCodeAt(0));

// string is a sequence (an array) of characters...
let string = "HI!"

for (let i = 0; i < string.length; i ++) {
    console.log(`Char: ${string[i]} ASCII: ${string.charCodeAt(i)}`);
}

// strings in JavaScript are immutable -> cannot be modified in-place. 
// any operation that changes a string (e.g., concatenation) creates a new string in memory.
string[0] = "x"; // No effect
console.log(string);

string = "hello"; // A new string is created
console.log(string);

// can consolidate strings into an array of strings
let words = [];

console.log(words);

words[0] = "HI!"
words[1] = "BYE!"

console.log(words);

// strings are arrays of characters
for (let i = 0; i < words.length; i ++) {
    for (let j = 0; j < words[i].length; j ++) {
        console.log(words[i][j]);
    }
}

