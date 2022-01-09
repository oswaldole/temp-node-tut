//npm - global command, comes with node
//npm --version

//local dependency - use it only in this project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (store important info about project/package)
//manual aproach (create package.json in the root, create)
//npm init (step by step)
//npm init -y (all yes)

const _ = require("loadsh");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);