// The child process module allows the process
// to execute external process /system commands within your environment
const cp = require("child_process");

// the exec is for synchronous functions
// cp.exec("open https://www.isbonline.co.uk/");

// open another terminal
// cp.exec("open -a Terminal .");

// cp.exec("ls", (err, data, stderr) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// });

cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
});