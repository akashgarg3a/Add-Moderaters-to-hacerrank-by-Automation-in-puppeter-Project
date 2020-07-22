// logs content of a file in sync manner
let fs = require('fs');

function fun() {
    try {
        for(let i = 1; i <= 4; i++){
            let fn = 'f' + i;
            let contents = fs.readFileSync('../files/' + fn + ".txt");
            console.log(contents + "");
        }
    }
    catch (err) {
        console.log(err);
    }
}

fun();
console.log('cpu stuck till file is read')
