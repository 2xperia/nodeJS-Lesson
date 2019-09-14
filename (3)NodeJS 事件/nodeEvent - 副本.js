const events = require("events");

var eventEmitter = events.EventEmitter;

function Dog(Dogname) {
	eventEmitter.call(this);
	this.Dogname = Dogname;
	var that = this;
	setTimeout(function(){
		that.emit("bark");

	},3000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;
	
var dog = new Dog("mingxing");
dog.on("bank",function(){
	console.log(this.Dogname +"can dfdf")
})