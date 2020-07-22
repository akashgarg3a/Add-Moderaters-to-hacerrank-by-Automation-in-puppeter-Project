let fs = require("fs");

// function pfun(){
//     let p = fs.promises.readFile("E:\\Online\\1. TPP\\1. Dev\\2. Lectures\\8. 6th April\\facts\\files\\f1.txt", "utf-8");
//     p.then(function(contents){
//         console.log(contents + "");
//     })   
// }

// pfun();

// if a call is made using await, always mark the function async
async function afun(){
    let contents = await fs.promises.readFile("E:\\Online\\1. TPP\\1. Dev\\2. Lectures\\8. 6th April\\facts\\files\\f1.txt", "utf-8");
    console.log(contents);
}
afun();

// await not allowed in top-level code
// let contents = await fs.promises.readFile("E:\\Online\\1. TPP\\1. Dev\\2. Lectures\\8. 6th April\\facts\\files\\f1.txt", "utf-8");
// console.log(contents);

// IIFE - Immediately invoked function execution
(async function(){
    let contents = await fs.promises.readFile("E:\\Online\\1. TPP\\1. Dev\\2. Lectures\\8. 6th April\\facts\\files\\f1.txt", "utf-8");
    console.log(contents);
})();

console.log("No blocking");