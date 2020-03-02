const path = require("path"); // 'path' is module that ship with nodeJS 
                 // it gives us methods to work with path strings

console.log(__dirname);
console.log(__filename);

console.log(`The file name is ${path.basename(__filename)}`);