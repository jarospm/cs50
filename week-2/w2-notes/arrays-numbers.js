let score1 = 72;
let score2 = 73;
let score3 = 33;

console.log("Average1: ", (score1 + score2 + score3) / 3);

// an array is essentially an object with additional features:
	//	the elements are stored as key-value pairs internally.
	//	keys are the indices (0, 1, 2, etc.), and values are the corresponding elements.
    //  the scores array might look like this internally:
        /*
        scores: {
            "0": 72,
            "1": 73,
            "2": 33,
            "length": 3
        }
        */
// arrays in JavaScript inherit from the Array prototype, which itself inherits from Object. 
// meaning that arrays have all the capabilities of objects, 
// plus additional array-specific methods - like .push(), .pop(), .map(), etc.

// Averages three (hardcoded) numbers using an array
let scores = [];
scores[0] = 72;
scores[1] = 73;
scores[2] = 33;

console.log("Average2: ", (scores[0] + scores[1] + scores[2]) / 3);

// Averages three numbers using an array and a loop
averageLoop(scores);

function averageLoop(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i ++) {
        sum += array[i];
    }
    let average = sum / array.length;
    console.log("Average3: ", average);
}

// JavaScript arrays can hold values of any type:
scores = [72, "seventy-three", true];

for (let i = 0; i < scores.length; i ++) {
    console.log(scores[i]);
}

console.log(scores);
