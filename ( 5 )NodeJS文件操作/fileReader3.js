const const http = require("http");

const path = require("path");

const fs = require("fs");

var filename = process.argv[2];

http.createServer(function(req,res){
	if (filename == undefined) {
		var reader = fs.createReadStream(process.argv[1]);
		reader.pipe(res);
	} 
	else{
		
	}
}).listen(8081);
console.log("fg");