// CummonJS, every file is module (by default)
// Modules --Encansulated code (only minimun)
const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor");
require("./7-Ming-granade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);