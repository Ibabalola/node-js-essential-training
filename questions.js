// process.stdin
// process.stdout - A writable stream - can used to send data out of our program
// The above 2 obj offers us a way to communicate with a process 
// Whilst it's running

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
];

const ask = ( index = 0 ) => {
    process.stdout.write(`\n\n\n ${questions[index]}`);
    process.stdout.write(` > `);
}

ask();