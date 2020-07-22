// code parallel to producing promises
async function producerFun() {
    // console.log('hello');
    // return 10;
    // let a = null;
    // a.fun();
    // return a;
    return new Promise(function(resolve, reject){
        console.log("In producerFun");
        setTimeout(function(){
            let val = Math.floor(Math.random() * 100);
            if(val % 2 == 0){
                resolve(val);
            } else {
                reject("I don't like odd numbers like " + val);
            }
        }, 2000);
    })
}

// val -> promise that resolves with that val
// no return -> promise that resolves with undefined
// promise -> returns same promise
// error -> promise that rejects with same error

// let valp = producerFun();
// valp.then(function (val) {
//     console.log(val);
// }).catch(function (err) {
//     console.log("in catch");
//     console.log(err);
// })

// code parallel to consuming promises
async function consumerFun() {
    try {
        let val = await producerFun();
        console.log("qwerty");
        console.log(val);
    } catch (err) {
        console.log("in catch");
        console.log(err);
    }
}

consumerFun();
