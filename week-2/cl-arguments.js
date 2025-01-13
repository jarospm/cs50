// in Node.js, the process.argv array contains the command-line arguments passed to the program
const args = process.argv;

// the first two elements are:
	//	process.argv[0]: the path to the Node.js executable
	//	process.argv[1]: the path to the script being executed
//console.log(args);

if (args.length > 2) { // check if the user provided extra arguments
    for (let i = 2; i < (args.length); i ++) {
        console.log(args[i]);
    }
} else {
    console.log("no extra arguments provided");
}

// love the cow!
// https://itsfoss.com/cowsay/
// check-out all options:
/*
cowsay -l | tail -n +2 | tr ' ' '\n' | while read cow; do
    if [ ! -z "$cow" ]; then
        echo "Using cow: $cow"
        cowsay -f "$cow" hello
        echo -e "\n"
    fi
done
*/