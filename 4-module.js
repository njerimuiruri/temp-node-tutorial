//global variables key values
//__filename - file name
//it doesn't have a window
//__dirname = path to the current directory
//__modules
//require function to use
//process - infor about evn wher the program is being executed

// console.log(__dirname);
// setInterval(()=> {
//     console.log('hello world')

// },1000);

//modules in node
//module encapsulation
//it uses common js , every file in node is a module

const names = require('./2-name')
const sayHi = require('./3-greet')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mind-grenede')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
