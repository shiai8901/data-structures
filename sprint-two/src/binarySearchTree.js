var BinarySearchTree = function(value) {
    var treeNode = Object.create(binarySearchTreeMethods);
    treeNode.value = value;
    treeNode.left = {};
    treeNode.right = {};
    return treeNode;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
    var newNode = BinarySearchTree(value);
    
    function traverse(node) {
        if (node.value > value) {
            if (node.left.value === undefined) {
                node.left = newNode;
            } else {
                traverse(node.left);
            }
        } else if (node.value < value) {
            if (node.right.value === undefined) {
                node.right = newNode;
            } else {
                traverse(node.right);
            }
        } else {
            node = newNode;
        }      
    };

    traverse(this);
};

binarySearchTreeMethods.contains = function(value) {
    var result = false;
    if (this.value === undefined) {
        return false;
    }

    function traverse(node) {
        if (node.value > value) {
            if (node.left.value === value) {
                result = true;
                return;
            } else {
                traverse(node.left);
            }
        } else if (node.value < value) {
            if (node.right.value === value) {
                result = true;
                return;
            } else {
                traverse(node.right);
            }
        } else if (node.value === value) {
            result = true;
            return;
        }      
    };

    traverse(this);
    return result;    
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
    function traverse(node) {
        if (node.value === undefined) {
          return;
        }    
        cb(node.value);  
        traverse(node.left);      
        traverse(node.right);       
    }
    traverse(this);    
};

binarySearchTreeMethods.breadthFirstLog = function() {
    var queue = [this];
    var result = [];

    while (queue.length > 0) {
        var current = queue.shift();
        if (current.value !== undefined) {
            result.push(current.value);
        }
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    return JSON.stringify(result);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert: O(log(n));
// contains: O(log(n));
// depthFirstLog: O(n);