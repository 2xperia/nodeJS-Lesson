const http = require("http");

const path = require("path");

const fs = require("fs");

var filename = process.argv[2];

http.createServer(function(req,res){
	if (filename == undefined) {
		var str = "sd";
		/*
		 fs.readFile,是一个异步方法，执行到该句不会等待文件读取完成就直接执行后面的语句，回调函数再等到文件读取完成后执行
		*/
		fs.readFile(process.argv[1],function(err,data){
			if (err) {
				console.log(err)
			} else {
				console.log(data.tiString());//data是Buffer类型
				res.end(str);
			}
		});
	} 
	else{
		var pathName = path.join(__dirname,filename);
		if(fs.existSync(pathName)){
			fs.readFile(pathName,function(err,data){
				if (err) {
					console.log(err)
				} else {
					console.log(data.tiString());
				}
			});
		}
		else{
			res.writeHead(200,{"Context-Type":"text/html;charset=utf-8"})
			console.log("不存在");
		}
	}
}).listen(8081);