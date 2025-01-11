//Node.js equivalent of the CS50 get_string function

//import Node built-in readline module (the /promise allows for async/await syntax)
import * as readline from 'node:readline/promises';

// Define the get_string function
async function getString(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(prompt);
  rl.close(); // Automatically close the interface
  return answer;
}

//making getString available to other files
export { getString };