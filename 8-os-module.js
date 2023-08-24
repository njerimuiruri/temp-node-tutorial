//os module in node js
const os = require('os')//module for operating system related functions and variables.
//info about current user
const user = os.userInfo()
console.log(user);

//how log a computer runs  or basically the systems uptime


console.log(`the system uptime is: ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem()
}
console.log(currentOs)