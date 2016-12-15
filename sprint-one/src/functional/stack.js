var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
    return value;
  };

  someInstance.pop = function() {
    var tmp;
    if (size > 0) {
      tmp = storage[size - 1];
      delete storage[size-1];
      size--;
    }
    return tmp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
