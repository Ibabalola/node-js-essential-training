const fs = require("fs");

// fs.renameSync("./storage-files", "./storage");

// remove all for the files within a directory
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// need to ensure that all files within directory are removed
fs.rmdir("./storage", err => {

    if (err) {
        throw err;
    }

    console.log("./storage directory removed");
});