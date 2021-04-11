const mongodb = require('mongodb')
const fs = require('fs')

let binary = mongodb.Binary


let path = fs.readFileSync('index.js')
console.log(path)

// const file = { file: binary(path)}

// console.log(file.file.buffer)

// fs.writeFile('copied.js', file.file.buffer, (err)=>{
//     if(err){
//         console.log(err)
//     }
// })