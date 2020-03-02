const path = require("path"); // 'path' is module that ship with nodeJS 
                 // it gives us methods to work with path strings

console.log(__dirname);
console.log(__filename);

// to pluck the file name from the full path 
console.log(`The file name is ${path.basename(__filename)}`);

// Every node JS file we create is referred to as a module, it contains it's own code
// modules are loaded using the require function that is available to us
// on the global object