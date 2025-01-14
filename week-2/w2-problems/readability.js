// Source: https://cs50.harvard.edu/x/2025/psets/2/readability/

// prompt user to enter text
import { getString } from "../../get-string.js";

const text = await getString("Text: ");

// COUNT LETTERS
const letters = countLetters(text);
console.log("Letters: ", letters);

function countLetters(string) {
    return string
        .split("") // convert the string into an array of characters
        .filter(char => char.toUpperCase() !== char.toLowerCase())
        .length;
}

// COUNT WORDS
const words = countWords(text);
console.log("Words: ", words);

function countWords(string) {
    return string
        .trim()
        .split(" ")
        .filter(word => word !== "") // remove extra empty spaces from .split(" ")
        .length;
}

// COUNT SENTENCES
const sentences = countSentences(text);
console.log("Sentences: ", sentences);


function countSentences(string) {
    return string
        .split("")
        .filter(char => [".", "!", "?"].includes(char))
        .length
}

// CALCULATE INDEX
function computeIndex (letters, words, sentences) {
    const L = letters / words * 100; // average letters per 100 words
    const S = sentences / words * 100; // average sentences per 100 words
    const index = Math.round(0.0588 * L - 0.296 * S - 15.8); // Coleman-Liau Index
    
    console.log("Index: ", index)
    // print grade
    if (index < 1) {
        console.log("Before Grade 1")
    } else if (index >= 16) {
        console.log("Grade 16+")        
    } else {
        console.log("Grade: ", index)
    }
}

computeIndex(letters, words, sentences);


/* ===FUNCTIONS WITHOUT STRING METHODS===

==COUNT LETTERS==
function countLetters(string) {
    let letters = 0;
    for (const char of string) {
        if (char.toUpperCase() !== char.toLowerCase()) { // TRUE only for letters
            letters++;
        }
    }
    return letters;
}

/* ==COUNT WORDS==
function countWords(string) {
    let words = 1; // account for no space after the last word
    for (const char of string) {
        if (char === " ") { // words are separated by spaces
            words ++;
        }
    }
    return words;
}

==COUNT SENTENCES==
function countSentences(string) {
    let sentences = 0;
    for (const char of string) {
        // assume sentences are defined by periods, exclamations, or question marks
        if (char === "." || char === "!" || char === "?") {
            sentences ++
        }
    }
    return sentences;
}

*/