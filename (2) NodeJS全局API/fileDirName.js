const http = require('http');

const server = http.createServer();

const path = require("path");

server.on("request",function(req,res){
    var pa = path.join(__dirname, 'views', 'view.html');
    res.write(pa);
    res.end();
});
server.listen(8080);