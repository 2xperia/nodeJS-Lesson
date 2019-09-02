const http = require("http");

var server = new http.Server();

server.on("request",function(req,res){
    res.end("hello worldfsdfsdfsdfsdfsfdsdfsd");
});
server.listen(8082);