const fs = require("fs");
const path = require("path");
var filename = process.argv[2];
var pathName = path.join(__dirname,filename);

if (fs.existsSync(pathName)) {
	var statObj = fs.statSync(pathName);
	if (statObj.isFile()) {
		fs.unlinkSync(pathName);
	}
	else{
		delDir(pathName);
	}
} else {
	console.log("不存在")
}

function delDir(pathName) {
	// body...
	var files = fs.readdirSync(pathName);
	for (var i = files.length - 1; i >= 0; i--) {
		var pathName1 = path.join(pathName,files[i]);
		var statObj = fs.statSync(pathName1);
		if (statObj.isFile()) {
			fs.unlinkSync(pathName1);
		} else if(statObj.isDirectory){
			delDir(pathName1);
		}
	}
}