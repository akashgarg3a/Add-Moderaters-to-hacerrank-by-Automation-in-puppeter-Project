let fs = require('fs');

function read(num){
    let fn = '../files/f' + num + '.txt';
    return fs.promises.readFile(fn, 'utf-8');
}

async function fun(i){
    for(let i = 1; i <= 4; i++){
        let c = await read(i);
        console.log(c);
    }
    // let pfp = read(i);
    // pfp.then(function(c){
    //     console.log(c);
    //     i++;
    //     if(i <= 4)
    //         fun(i);
    // })
}
fun(1);

console.log('cpu is not stuck because file is read by api in a background');