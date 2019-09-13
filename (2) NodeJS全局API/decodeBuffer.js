 process.argv[2] = 'emhhbmdzYW46MTIzNDU2';

const buf = new Buffer(process.argv[2], 'base64');
const info = buf.toString('utf8').split(':');

if(info.length !== 2) {
  console.error('信息有误！');
  process.exit(2);
}

console.log('user name: %s\npassword: %s', info[0], info[1]);