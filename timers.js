const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine(); // clears last line
    process.stdout.cursorTo(0); // move cursor back to start
    process.stdout.write(`waiting... ${p}%`);
    //console.log(`waiting ${currentTime / 1000} seconds`);
};

console.log(`setting a ${waitTime / 1000} seconds delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // clears last line
    process.stdout.cursorTo(0); // move cursor back to start
    console.log('done');
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);