function Logger() {
  this.lastIntervalLogAt = null;
}


Logger.prototype.log = function(o) {
  console.log(o);
};

Logger.prototype.debug = Logger.prototype.log;

Logger.prototype.periodicLog = function(frequency, o) {
  var interval = (new Date()) - this.lastIntervalLogAt;
  if(interval < frequency) {
    return;
  }

  this.log(o);
  this.lastIntervalLogAt = new Date();
}


