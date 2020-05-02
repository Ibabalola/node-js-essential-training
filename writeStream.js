// we can use the file system to write data 
// to a file on the file system using the 
// create write stream interface

const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world\n");


// process stout is a writable stream so it has a write method
// we can use the write method to write data to a writable stream
// which is the terminal
// process.stdout.write("hello");
// process.stdout.write(" world\n");

// readable streams are built / made to work with writable streams
// console.log("type some text...");
// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

// copies data from one file to another
// readStream.on("data", data => {
//     writeStream.write(data);
// });


// because readable streams are made to work with writeable streams
// the have a lot method that help you compose them
// process.stdin.pipe(writeStream);

// write stream are the counter part to the read stream and are 
// seen / used all over in node JS
readStream.pipe(writeStream);