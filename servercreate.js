const h = require('http')
// console.log(h)

h.createServer((req , res) =>{

    res.write("welcome Node js  dileep meena 164")

    res.end()

}).listen(3000,console.log("server is Running localhost:3000"))

// localhost : 3000