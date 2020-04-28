const fs = require("fs");

// blocking
// const text = fs.readFileSync("./assets/README.md", "UTF-8");
// console.log(text);

// asynchoronous
// fs.readFile("./assets/README.md", "UTF-8", (err, text) => {
//     console.log("file content read");
//     console.log(text);
// });

// Binary - no encoding provided
// content of the file are read into a buffer
fs.readFile("./assets/isaac.png", (err, img) => {

    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }

    console.log("file content read");
    console.log(img);
});