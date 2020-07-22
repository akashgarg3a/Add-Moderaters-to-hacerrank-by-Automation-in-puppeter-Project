// logs content of a file in sync manner
let fs = require('fs');

function handleFileRead(err, contents){
    if(err){
        console.log(err);
    } else {
        console.log(contents + "");
    }
}

fs.readFile('../files/f1.txt', handleFileRead);
console.log('cpu not stuck till file is read')
