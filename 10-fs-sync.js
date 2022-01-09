const { readFileSync, writeFile, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/firts.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}`, { flag: "a" }
);

console.log("done with the task");
console.log("Starting with the next one");