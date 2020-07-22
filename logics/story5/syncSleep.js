function sleepSync(duration){
    let curr = Date.now();
    let limit = curr + duration;
    while(curr < limit){
        curr = Date.now();
    }
}

console.log('hi')
sleepSync(5000);
console.log('bye')