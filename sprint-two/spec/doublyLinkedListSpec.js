describe('DoublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
    expect(linkedList.print).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToHead(4);
    expect(linkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    expect(linkedList.print()).to.equal(true);
  });

  // add more tests here to test the functionality of linkedList
});
