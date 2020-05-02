// the file systems comes with a way to create readable streams
const fs = require("fs");

// path to file that is to be read, will need to text encoding
const readStreamPath = "./assets/lorum-ipsum.md";

// creating a text readable stream
// we can also create a binary read stream
const readStream = fs.createReadStream(readStreamPath, "UTF-8");

console.log(`reading data from ${readStreamPath}`);

let fileText = "";
let readCount = 0;

// reading the file bit by bit, chunk by chunk
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileText += data;
    readCount += 1;
});

// reads only the first bit / chunk of data in the file
// so now we can add functionality to data events of every 
// bit / chunk of data being read
readStream.once("data", data => {
    console.log("Just read the first bit / chunk of data");
});

// readStream also raise an end event, we can use the end event to know that the
// readStream has ended
readStream.on("end", () => {
    console.log("finish");
    console.log(`In total I read ${fileText.length - 1} characters of text in ${readCount} read count(s)`);
})

// we're using process.stdin to listen to data events on terminal
// Process .stdin is a readable stream, we read the data by listening to data events
// console.log("type something...");
// process.stdin.on("data", data => {
//     console.log(`I read ${data.length - 1} characters of text`);
// });

