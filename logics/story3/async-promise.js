// logs content of a file in sync manner
let fs = require('fs');

// function fun() {
//     let f1p = fs.promises.readFile('../files/f1.txt', 'utf-8');
//     f1p.then(function(c){
//         console.log(c);
//         let f2p = fs.promises.readFile('../files/f2.txt', 'utf-8');
//         return f2p;
//     }).then(function(c){
//         console.log(c);
//         let f3p = fs.promises.readFile('../files/f3.txt', 'utf-8');
//         return f3p;
//     }).then(function(c){
//         console.log(c);
//         let f4p = fs.promises.readFile('../files/f4.txt', 'utf-8');
//         return f4p;
//     }).then(function(c){
//         console.log(c);
//     })
// }
// fun();

function read(num){
    let fn = '../files/f' + num + '.txt';
    return fs.promises.readFile(fn, 'utf-8');
}

function fun(){
    let pfp = read(1);
    for(let i = 2; i <= 4; i++){
        pfp = pfp.then(function(c){
            console.log(c);
            return read(i);
        })
    }

    pfp.then(function(c){
        console.log(c);
    })
}
fun();

console.log('cpu is not stuck because file is read by api in a background');