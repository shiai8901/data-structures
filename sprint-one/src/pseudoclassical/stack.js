var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.the_size = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.the_size] = value;
  this.the_size++;
  return value;
};

Stack.prototype.pop = function() {
  var tmp;
  if (this.the_size > 0) {
    tmp = this.storage[this.the_size - 1];
    delete this.storage[this.the_size - 1];
    this.the_size--;
  }
  return tmp;
};

Stack.prototype.size = function() {
  return this.the_size;
};
