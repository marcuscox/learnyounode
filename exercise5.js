var fs = require("fs");
const path = require('path');
var theDir = process.argv[2];
var theExt = "." + process.argv[3];

function doneReading(error,arrayOfFileNames) {
    if(error) {
        return console.error(error);
    }
    
    arrayOfFileNames.forEach(function(file) {
        if(path.extname(file) === theExt) {
            console.log(file);
        }            
    })
};

fs.readdir(theDir, doneReading);