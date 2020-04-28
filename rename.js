const fs = require("fs");

// rename file
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// move file
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});

// remove a file by calling .unlinkSync()
setTimeout(() => {
    fs.unlinkSync("./assets/isaac.png");
}, 4000);