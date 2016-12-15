var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.the_size = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  var latest = keys[keys.length - 1];
  this.storage[latest + 1] = value;
  this.the_size++;
  return value;
};

Queue.prototype.dequeue = function() {
  if (this.the_size > 0) {
    var keys = Object.keys(this.storage);
    var tmp = this.storage[keys[0]];
    delete this.storage[keys[0]];
    this.the_size--;
    return tmp;
  }
};

Queue.prototype.size = function() {
  return this.the_size;
};
