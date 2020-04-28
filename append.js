const fs = require("fs");
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => {
    // will create the file if it does exsist
    // but append to the file if it does exsist
    fs.appendFile("./storage-files/color.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});