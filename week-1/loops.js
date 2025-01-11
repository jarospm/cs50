// WHILE Loops
console.log("WHILE Loop - count down")

let countDown = 3
while (countDown > 0) {
    console.log(countDown);
    countDown --;
}

console.log("WHILE Loop - count up")

let countUp = 0
while (countUp < 3) {
    console.log(countUp);
    countUp ++;
}

// FOR Loops
console.log("FOR Loop - count up")

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// get input for the # of loops
import { getString } from "../get-string.js";

let reps;
//Use do-while structure to continues prompting until a valid input is provided.
do {
    reps = Number(await getString("How many loops? "));
} while (isNaN(reps) || reps < 1);


for (let i = 1; i <= reps; i++) {
    console.log(i);
}