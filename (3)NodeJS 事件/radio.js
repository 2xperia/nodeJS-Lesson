const EventEmitter = require('events').EventEmitter,
const util = require('util');

function Radio(station) {
  EventEmitter.call(this);

  var self = this;

  setTimeout(function() {
    self.emit('open', station);
  }, 0);

  setTimeout(function() {
    self.emit('stop', station);
  }, 5000);
}

util.inherits(Radio, EventEmitter);

module.exports = Radio;
