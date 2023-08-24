//path segment to get the paths of the system
//it returns an absolute path. it accepts a sequence of paths
const path = require('path');
console.log(path.sep)
const filepath =  path.join('/content','subfolder','test.txt')
console.log(filepath)
//base path
const base = path.basename(filepath)
console.log(base)

//path 
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)