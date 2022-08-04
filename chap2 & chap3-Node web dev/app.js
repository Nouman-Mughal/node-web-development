const http=require("http")
http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Hello world")})
     .listen(8124,"127.0.0.1")
    //  .listen is an active event listenere which keeps on running until you type ctrl+C.

    
console.log("server is listening on 8124")