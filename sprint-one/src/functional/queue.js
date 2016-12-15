var Queue = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keyArray = Object.keys(storage);
    var largestKey = keyArray[size - 1];
    storage[largestKey + 1] = value; 
    size++;
    return value;
  };

  someInstance.dequeue = function() {
    var keyArray = Object.keys(storage);
    var smallestKey = keyArray[0];
    var tmp = storage[smallestKey];
    delete storage[smallestKey];
    if (size > 0) {
      size--;
    }
    return tmp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
