// logs content of a file in sync manner
let fs = require('fs');

async function fun() {
    // let fileWillBeReadPromise = fs.promises.readFile('../files/f1.txt');
    try {
        let contents = await fs.promises.readFile('../files/f1.txt');;
        console.log('in async, afterwards');
        console.log(contents + "");
    }
    catch (err) {
        console.log(err);
    }
    // fileWillBeReadPromise.then(function(contents){
    //     console.log('in async, afterwards');
    //     console.log(contents + "");
    // })
}

fun();
console.log('cpu is not stuck because file is read by api in a background');