const Dog = require('./dog.js');

var qiutian = new Dog('qiutian', 4);
var zangao = new Dog('zangao', 8);
qiutian.on('bark', onBark);
zangao.on('bark', onBark);

function onBark() {
  console.log('%s barked! energy: %s', this.name(), this.energy());
}

