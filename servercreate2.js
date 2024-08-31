
const h = require('http')
// console.log(h)

h.createServer((req , res) =>{

    res.write("welcome Node js  dileep meena 1664")

    res.end()

}).listen(4000,console.log("server is Running localhost:4000"))
