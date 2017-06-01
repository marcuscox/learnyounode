var fs = require("fs");
var theFile = fs.readFileSync(process.argv[2]);
var numofLines = (theFile.toString().split('\n').length - 1);

console.log(numofLines);