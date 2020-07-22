// logs content of a file in sync manner
let fs = require('fs');

let fileWillBeReadPromise = fs.promises.readFile('../files/f1.txt');
fileWillBeReadPromise.then(function(contents){
    console.log(contents + "");
}).catch(function(err){
    console.log(err);
})

console.log('cpu is not stuck because file is read by api in a background');