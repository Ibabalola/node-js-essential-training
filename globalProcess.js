// The global process object  can access globally
// contains information about the current process
// as well as tools to access the current process

console.log(`ID ${process.pid}`);
console.log(`Version ${process.versions.node}`);

// The process object we can:
// read env variables
// communicate with the terminal
// communitcate with parent processes through standard I/O
// exit the current process

// ARGV = Environment variables that are sent the process when 
// we run it
console.log(`ARGV ${process.argv}`);
console.log(process.argv);

// Array destructuring
//const [,,firstName, lastName] = process.argv;
//console.log(`Your name is ${firstName} ${lastName}`);

// Typically arguments to node process will be sent with flags
// const grab = flag => {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

const grab = flag => process.argv[process.argv.indexOf(flag) + 1];

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);



