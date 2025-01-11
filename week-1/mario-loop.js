//get input for the # of loops
import { getString } from "./get-string.js";

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


//loop brush over the rows and columns

//print n rows
for (let i = 0; i < rows; i ++) {
    paintRow(columns)
}

//print n of brush (i.e. one row)
function paintRow(n) {
    let x = "";
    for (let i = 0; i < n; i ++) {
        x += brush;
    }
    console.log(x);
}