const fs = require("fs");

// Using template string to honour the whitespace
const md = `
# This is a new file

We can write text to file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("file saved");
});