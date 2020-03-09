// process.stdin
// process.stdout - A writable stream - can used to send data out of our program
// The above 2 obj offers us a way to communicate with a process 
// Whilst it's running

// process.stdout.write("Hello "); - used to write date out of our process
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (index = 0) => {
    process.stdout.write(`\n\n\n ${questions[index]}`);
    process.stdout.write(` > `);
}

ask();

const answers = []; 

// a listening to listen for event of type data
process.stdin.on('data', data => {
    //received a buffer / binary
    //process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    //process.exit();

    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

// listeners are used to create asyncronous nodeJS programs
process.on('exit', () => {
    const [name, activity, language] = answers;

    console.log(`
    
    Thank you for your answers.
    
    Go ${activity} ${name} you can write ${language} code later!!!

    `);
});