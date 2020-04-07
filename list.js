const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listData = data => {
    console.log("started reading files");
    const doAsync = data.toString().toLowerCase().trim().includes('yes');
    const complete = files => {
        console.log("complete");
        console.log(files);
        process.exit();
    }
    
    // read the contents of a directory into a variable
    // provide the path of the directory we would like to read
    if (doAsync) {
         // this function executing asynchronously 
        fs.readdir("./assets", (err, files) => {
            if (err) 
                throw error;
    
            complete(files);
        });
    } else {
        // this function executing synchronously
        // this means that the line is blocking
        // JS will stop everything it is doing 
        // until all the files within the directory
        // are read before executing any more lines of code.
        const files = fs.readdirSync("./assets");
        complete(files);
    }
};

rl.question('Should we list the files in ./assets asynchronously? ', listData);

