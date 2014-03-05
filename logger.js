function Logger() {
  this.lastIntervalLogAt = null;
}

Logger.prototype.periodicLog = function(frequency, o) {
  var interval = (new Date()) - this.lastIntervalLogAt;
  if(interval < frequency) {
    return;
  }

  console.log(o);
  this.lastIntervalLogAt = new Date();
}
