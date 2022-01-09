const os = require("os");

// info about about current user
const user = os.userInfo();
console.log(user);

//method return system uptime in seconds
console.log(`The system  uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
};
console.log(currentOS);