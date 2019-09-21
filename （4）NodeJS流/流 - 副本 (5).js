/*
*流是一种数据的传输方式
可以将数据从一个地方传输到另一个地方
*/
const fs = require("fs");

const http = require("http");

const path = require("path");

http.createServer(function(req,res){

	var filePath = path.join(__dirname,"./stream.txt");

	const streanReader = fs.createReadStream(filePath);

	streanReader.pipe(res);

}).listen(8080);

console.log("yes");