//GET INPUT
import { getString } from "../get-string.js";

let rows;
let columns;
let brush = "";

//use do-while structure to continues prompting until valid inputs are provided.
do {
    rows = Number(await getString("How many rows? "));
} while (isNaN(rows) || rows < 1);
do {
    columns = Number(await getString("How many columns? "));
} while (isNaN(columns) || columns < 1);
do {
    brush = await getString("What character to use? ");
} while (brush.trim() === "" || brush.length > 1);


//PRINT RECTANGLE
console.log("PRINTING RECTANGLE")

//print n rows
for (let i = 0; i < rows; i ++) {
    printRectRow(columns)
}

//print n of brush (i.e. one row)
function printRectRow(n) {
    let x = "";
    for (let i = 0; i < n; i ++) {
        x += brush;
    }
    console.log(x);
}


//PRINT PYRAMID
console.log("PRINTING PYRAMID")

for (let i = 1; i <= rows; i ++) {
    let x = printPyramidLeft(rows, i);
    x += " ";
    x += printPyramidRight(i)
    console.log(x);
}

// right-aligned pyramid (on the left-hand side)
function printPyramidLeft(rows, n) {
    let x = "";
    // Add spaces
    for (let i = 0; i < rows - n; i++) {
        x += " ";
    }

    // Add brush characters
    for (let i = 0; i < n; i++) {
        x += brush;
    }
    return x;
}

// left-aligned pyramid (on the right-hand side)
function printPyramidRight(n) {
    let x = "";
    for (let i = 0; i < n; i ++) {
        x += brush;
    }
    return x;
}
