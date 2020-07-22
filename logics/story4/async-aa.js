let fs = require('fs');

function read(num) {
    let fn = '../files/f' + num + '.txt';
    return fs.promises.readFile(fn, 'utf-8');
}

async function fun(i) {
    let c = read(i);
    console.log(1234);
    c = await c;
    console.log(c);

}

for (let x = 0; x < 4; x++) {
    fun(x + 1);
}

console.log('cpu is not stuck because file is read by api in a background');