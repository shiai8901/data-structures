var GraphNode = function(value) {
    this.vertex = value;
    this.edge = {};
}

// Instantiate a new graph
var Graph = function() {
    this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    var newNode = new GraphNode(node);
    this.storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    var deleteNode = this.storage[node];
    for (var key in deleteNode.edge) {
        delete this.storage[key].edge[node];
    }
    delete this.storage[node];
    
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.storage[fromNode].edge[toNode])
        return true;
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
        this.storage[fromNode].edge[toNode] = toNode;
        this.storage[toNode].edge[fromNode] = fromNode;
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    if (this.hasEdge(fromNode,toNode)) {
       delete this.storage[fromNode].edge[toNode];
       delete this.storage[toNode].edge[fromNode];
    }    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var key in this.storage) {
        cb(this.storage[key].vertex);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode: O(1);
// contains: O(1);
// removeNode: O(n);
// hasEdge: O(1);
// addEdge: O(1);
// removeEdge: O(1);
// forEachNode: O(n);