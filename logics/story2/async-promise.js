// logs content of a file in sync manner
let fs = require('fs');

let f1WillBeReadPromise = fs.promises.readFile('../files/f1.txt', 'utf-8');
f1WillBeReadPromise.then(function(cf1){
    console.log(cf1);
    if(cf1 === '10'){
        let f2WillBeReadPromise = fs.promises.readFile('../files/f2.txt', 'utf-8');
        return f2WillBeReadPromise;
    } else {
        let f3WillBeReadPromise = fs.promises.readFile('../files/f3.txt', 'utf-8');
        return f3WillBeReadPromise;
    }
}).then(function(contents){
    console.log(contents);
}).catch(function(err){
    console.log(err);
})

console.log('cpu is not stuck because file is read by api in a background');