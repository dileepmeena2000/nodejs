const f = require('fs')
//console.log(f)


// f.readFile (__dirname+"/student.txt","utf-8",(err ,data)=>{

// if(err) throw err;
// console.log(data);

// });
// console.log("hello gwalior")

const data = f.readFileSync(__dirname + "/student.txt","utf-8");
console.log(data);
console.log("hello");