var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.the_size = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  var latest = keys[keys.length - 1];
  this.storage[latest + 1] = value;
  this.the_size++;
  return value;
};

queueMethods.dequeue = function() {
  if (this.the_size > 0) {
    var keys = Object.keys(this.storage);
    var tmp = this.storage[keys[0]];
    delete this.storage[keys[0]];
    this.the_size--;
    return tmp;
  }
};

queueMethods.size = function() {
  return this.the_size;
};
