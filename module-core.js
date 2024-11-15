const http = require ("http")

http.createServer((req,res)=>{
    res.write("<h1>Hello Node!!!!</h1>\n")
    res.end
}).listen(3000,console.log('serveur is runs on port 3000'))


console.log("Debut")

 const fs = require("fs")
 console.log(fs.readFileSync("./welcome.txt","utf8"))
//  fs.readFile("./welcome.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         return console.log(data)
//     }
//  })

 console.log("fin")