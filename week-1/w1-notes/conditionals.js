// import getString function
import { getString } from '../../get-string.js';

getConfirmation();

// get confirmation to procceed
async function getConfirmation(){
    let prompt = await getString("Would you like to proceed?\n");

    if (prompt === 'Y' || prompt === 'y') {
        compareNumbers();
    } else {
        console.log('confirm via "Y" or "y"');
        getConfirmation();
    }
}

// get and compare nummeric values of x and y
async function compareNumbers() {
    let x = await getValidNumber("What ix x?\n");
    let y = await getValidNumber("What ix y?\n");

    if (x > y) {
        console.log("X is greater than Y");
    } else if (y > x) {
        console.log("Y is greater than X");
    } else {
        console.log("X and Y are the same")
    }

}

// validate input to be a number (re-prompt till true)
async function getValidNumber(prompt) {
    let num = Number(await getString(prompt));
    if (isNaN(num)) {
        console.log("Input must be a valid number");
        return getValidNumber(prompt);
    }
    return num;
}