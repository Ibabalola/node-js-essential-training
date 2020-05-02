const cp = require("child_process");

// use .spawn to run asynchronous external process / apps
const questionsApp = cp.spawn("node", ["ask-questions.js"]);

questionsApp.stdin.write("Isaac \n");
questionsApp.stdin.write("London \n");
questionsApp.stdin.write("Be Free \n");

questionsApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionsApp.on("close", () => {
    console.log('questionApp process exited');
});