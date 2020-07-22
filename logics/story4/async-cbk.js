// logs content of a file in sync manner
let fs = require('fs');

// fs.readFile('../files/f1.txt', 'utf-8', function(err, cf1){
//     console.log(cf1);
//     fs.readFile('../files/f2.txt', 'utf-8', function(err, cf2){
//         console.log(cf2);
//         fs.readFile('../files/f3.txt', 'utf-8', function(err, cf3){
//             console.log(cf3);
//             fs.readFile('../files/f4.txt', 'utf-8', function(err, cf4){
//                 console.log(cf4);
//             })
//         })
//     })
// });

// function fun(num) {
//     let fn = '../files/f' + num + ".txt";
//     fs.readFile(fn, 'utf-8', function (err, cf) {
//         console.log(cf);
//         if (num < 4) {
//             fun(num + 1);
//         }
//     })
// }
// fun(1);

function wfun(){
    let flag = false;

    for(let i = 1; i <= 4; i++){
        let fn = '../files/f' + i + ".txt";

        fs.readFile(fn, 'utf-8', function (err, cf) {
            console.log(cf);
            flag = true;
        })
    }
}
wfun();
console.log('cpu not stuck till file is read')
