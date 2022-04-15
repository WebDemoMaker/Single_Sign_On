const http = require("http")
const fs = require("fs")

// lets import the inbuilt fs module to read and send the html file
const server = http.createServer((req,res)=>{

	fs.readFile('./index1.html',(err,html)=>{
	res.write(html)
    res.end()
	})
})

server.listen(8000)