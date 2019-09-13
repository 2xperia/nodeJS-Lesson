const user = process.argv[2];
const pass = process.argv[3];

if (process.argv.length != 4) {
	console.log("error");
}

console.log('username:%s'+"  "+ 'password:%s',user,pass)

const buf = new Buffer(user + ':' + pass);

console.log('base64加密:', buf.toString('Base64'));