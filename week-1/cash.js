// GET INPUT
import { getString } from "../get-string.js";

let change = "";

do {
    change = Number(await getString("How much change? "));
} while (isNaN(change) || change < 1);


// DEFINE COINS

// in that cashier’s drawer are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢)
// the problem is to decide which coins and how many of each to hand to the customer

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;


// calculate how many coins to return
// TODO - think how to separate the "shared function"

if (change >= QUARTER) {
    quarters = Math.floor(change / QUARTER);
    change = change % QUARTER;
    console.log("Quarters: " + quarters)
    console.log("Change left: " + change)
}
if (change >= DIME) {
    dimes = Math.floor(change / DIME);
    change = change % DIME;
    console.log("Dimes: " + dimes)
    console.log("Change left: " + change)
}
if (change >= NICKEL) {
    nickels = Math.floor(change / NICKEL);
    change = change % NICKEL;
    console.log("Nickels: " + nickels)
    console.log("Change left: " + change)
}

pennies = change
console.log("Pennies: " + pennies)

console.log("Coins back: " + Number(quarters + dimes + nickels + pennies))



