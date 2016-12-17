var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  
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
    list.size++;
  };

  list.removeHead = function() {
    if (list.head !== null && list.head.next !== null) {
      var oldHead = list.head;
      list.head = list.head.next;
      oldHead.next = null;
      list.size--;
      return oldHead.value;
    } else if (list.head !== null && list.head.next === null) {
      var oldHead = list.head;
      list.head = null;
      list.tail = null;
      list.size--;
      return oldHead.value;
    } else {
      return 'empty list!';
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

  list.getSize = function() {
    return list.size;
  };
  return list;
};



var Node = function(value) {
  //var node = {};

  this.value = value;
  this.next = null;

  //return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addToTail: O(1);
// removeHead: O(1);
// contains: O(n);