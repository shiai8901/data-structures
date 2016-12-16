var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = {};  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value); // create a new treeNode
  var keys = Object.keys(this.children); // find the the numerical keys in the its parent's children obj
  if (keys.length === 0) { // if the parent has no child
    this.children[0] = child;  // this new node will be the 0th children
  } else {
    var index = +keys[keys.length - 1] + 1; 
    this.children[index] = child; // add the new treeNode to its parent's children obj;
  }
};

treeMethods.contains = function(target) {

  var keys = Object.keys(this.children);
  var numOfChildren = keys.length;

  var result = false;
  for (var i = 0; i < numOfChildren; i++) {
    if (this.children[keys[i]].value === target) {
      result = true;
      break;
    } else if (numOfChildren !== 0) {
      result = this.children[keys[i]].contains(target);
      if (result === true) {
        return true;
      }
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
