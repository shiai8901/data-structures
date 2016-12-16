var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

// O(n) because contains takes O(n) time and add a new item will cost O(1) time
setPrototype.add = function(item) { 
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) { // O(n) because it has to check every element
  for (var element in this._storage) {
    if (element === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) { // O(1)
  if (this.contains(item)) {
    delete this._storage[item];
    return item;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
