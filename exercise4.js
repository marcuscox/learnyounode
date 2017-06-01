var fs = require("fs");
var theFile = process.argv[2];

fs.readFile(theFile, doneReading);

function doneReading(error,fileContents) {
    if(error) {
        return console.error(error);
    }
    
    var numofLines = (fileContents.toString().split('\n').length - 1);
    console.log(numofLines);
};