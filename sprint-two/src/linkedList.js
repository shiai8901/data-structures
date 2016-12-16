var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    if(list.head === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else if (list.head === list.tail) {
      var newTail = new Node(value);
      list.head.next = newTail;
      list.tail = newTail;
    } else {
      var newTail = new Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    if (list.head !== null && list.head.next !== null) {
      var oldHead = list.head;
      list.head = list.head.next;
      oldHead.next = null;
      return oldHead.value;
    } else if (list.head !== null && list.head.next === null) {
      var oldHead = list.head;
      list.head = null;
      list.tail = null;
      return oldHead.value;
    }
  };

  list.contains = function(target) {    
    var pointer = list.head;
    while (pointer !== null) {
      if (pointer.value === target) {
        return true;
      } else {
        pointer = pointer.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
