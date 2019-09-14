const events = require("events");//引入events模块

console.log(events);

var eventEmitter = new events.EventEmitter();//实例化对象

eventEmitter.on("hello",function(arg1,arg2){//绑定事件，事件监听
	console.log("hello world");
	console.log(arg1,arg2);
})
eventEmitter.emit("helloo");//触发事件



1.实现时间的继承的API

http.createServer(callback).listen(8001);
当前段发来请求时，触发事件，执行回调函数
process.stdin.on("data",callback)
当输入流接收到用户输入数据时，执行回调函数