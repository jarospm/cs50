import { getString } from "../get-string.js";

let wordPlayerOne = await getString("Player 1: ");
let wordPlayerTwo = await getString("Player 2: ");

// map scores to point to indexes from 0 to 25 (representing letters a-z)
let points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

// calculate points for each word
let scorePlayerOne = calcScore(wordPlayerOne);
let scorePlayerTwo = calcScore(wordPlayerTwo);

function calcScore(word) {
    let score = 0;
    // convert to lowercase to handle both upper and lower case letters
    for (const char of word.toLowerCase()) {
        // for lowercase letters 'a' to 'z', the ASCII values are 97 to 122
        const letterIndex = char.charCodeAt() - 97;
        // Add points for this letter to the total score
        if (letterIndex >= 0 && letterIndex < 26) { // only score valid letters
            score += points[letterIndex];
        }
    }
    return score;
}

// determine winner
getWinner(scorePlayerOne, scorePlayerTwo);

function getWinner(score1, score2) {
    console.log(`Player 1 score: ${scorePlayerOne}`);
    console.log(`Player 1 score: ${scorePlayerTwo}`);
    if (score1 === score2) {
        console.log("It's a tie!");
    } else if (score1 > score2) {
        console.log("Player 1 wins!");
    } else {
        console.log("Player 2 wins");
    }   
}