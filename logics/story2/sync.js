// logs content of a file in sync manner
let fs = require('fs');

function fun() {
    try {
        let cf1 = fs.readFileSync('../files/f1.txt', 'utf-8');
        console.log(cf1);
        if(cf1 === '10'){
            let cf2 = fs.readFileSync('../files/f2.txt', 'utf-8');
            console.log(cf2);
        } else {
            let cf3 = fs.readFileSync('../files/f3.txt', 'utf-8');
            console.log(cf3);
        }
    }
    catch (err) {
        console.log(err);
    }
}

fun();
console.log('cpu stuck till file is read')
