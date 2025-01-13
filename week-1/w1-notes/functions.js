// import getString function
import { getString } from '../../get-string.js';

//await makes sure each function completes before moving to the next one
await greeting();
await favoriteColor();

async function greeting() {
  let name = await getString("What is your name? ");
  console.log("Greetings, " + name);
}

async function favoriteColor() {
  let color = await getString("What is your favorite color? ");
  console.log("Wow, " + color + " is a great color!");
}

