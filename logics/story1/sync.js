// logs content of a file in sync manner
let fs = require('fs');

function fun() {
    try {
        let contents = fs.readFileSync('../files/f1.txt');
        console.log('in sync, stuck');
        console.log(contents + "");
    }
    catch (err) {
        console.log(err);
    }
}

fun();
console.log('cpu stuck till file is read')
