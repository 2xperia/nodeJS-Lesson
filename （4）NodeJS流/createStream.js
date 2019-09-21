/*
*流是一种数据的传输方式
可以将数据从一个地方传输到另一个地方
*/
const Readable = require('stream').Readable;

var c = 'a'.charCodeAt(0);

var MyReadable = function() {
  Readable.call(this);
};

MyReadable.prototype = Readable.prototype;

MyReadable.prototype._read = function() {
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

var rs = new MyReadable();
rs.pipe(process.stdout);