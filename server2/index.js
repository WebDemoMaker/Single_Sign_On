const http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    fs.readFile('./index2.html',(err,html)=>{
    res.write(html)
    res.end()
    })
})

server.listen(9000)