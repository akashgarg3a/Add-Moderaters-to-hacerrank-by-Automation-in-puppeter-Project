// logs content of a file in sync manner
let fs = require('fs');

fs.readFile('../files/f1.txt', 'utf-8', function(err, cf1){
    console.log(cf1);
    if(cf1 ==='10'){
        fs.readFile('../files/f2.txt', 'utf-8', function(err, cf2){
            console.log(cf2);
        })
    } else {
        fs.readFile('../files/f3.txt', 'utf-8', function(err, cf3){
            console.log(cf3);
        })
    }
});
console.log('cpu not stuck till file is read')
