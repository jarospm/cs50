// make the program returns explicit value
const args = process.argv;
console.log(args);

if (args.length === 3) {
    console.log(`hello, ${args[2]}`);
    process.exit(0); // Exit with code 0 (success)
} else {
    console.log("can only accept one extra argument");
    process.exit(1); // Exit with code 1 (error)
}

// exit codes can be used to determine the next steps 
// in larger workflows or automation pipelines

// use 'echo $?' command in the terminal... 
// to check the exit code of a JavaScript program run with Node.js