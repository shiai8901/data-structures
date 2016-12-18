var DoubleNode = function(value) {
  var doubleNode = {};

  doubleNode.value = value;
  doubleNode.next = null;
  doubleNode.prev = null;

  return doubleNode;
};

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToHead = function(value) {
    var node = DoubleNode(value);
    if(list.head === null) {     
      list.head = node;
      list.tail = node;
    } else {
      list.head.prev = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeTail = function() {
    var node=list.tail;
    list.tail=list.tail.prev;
    if(list.tail) {
      list.tail.next=null;
    }
    return node.value;
  };

  // list.contains = function(target) {
  //   var temp=list.head;
  //   while(temp!==null){
  //     if(temp.value===target)
  //       return true;
  //     else
  //       temp=temp.next;

  //   }
  //   return false;
  // };

  list.print = function () {
   var temp1 = list.head;
   var temp2 = list.tail;
   var arr1 = [];
   var arr2 = [];
   while (temp1 !== null) {
     arr1.push(temp1.value);
     temp1 = temp1.next;
   }
   while(temp2!==null) {
     arr2.unshift(temp2.value);
     temp2 = temp2.prev;
   }
   return JSON.stringify(arr1)===JSON.stringify(arr2);
};

return list;
};




/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail() - O(1)
 removeHead() - O(1);
 contains()- O(n);
 */
