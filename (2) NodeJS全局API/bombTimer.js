function Bomb() {
	this.message = "Bomb!!";

};
Bomb.prototype.explode = function() {
		var that = this;
		setTimeout(function(){
			console.log(that.message);
		},2000);
	};
var bomb = new Bomb();
bomb.explode();