

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v]; 

  if (!bucket) {
    bucket = [tuple];
    this._storage.set(index, bucket);
    this._filled++;
 
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    } else {
      bucket.push(tuple);
      this._filled++;
      
    }
  }
  if (this._filled > Math.floor(this._limit * 3 / 4)) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      var tmp = bucket[i][1];
      bucket.splice(i, 1);
      //this._storage.set(index,bucket);
      this._filled--;

       if (this._filled < this._limit / 4) {
          this.resize(this._limit / 2);
       }
      return tmp;
      
    }
  }
  
};

HashTable.prototype.resize = function(newlimit) {
  // var tmp = this._storage;
  // console.log("temp: ",tmp);
  // this._filled = 0;
  // this._storage = LimitedArray(newlimit);
  // console.log(this._storage);
  // for (var i in tmp) {
  //   if (tmp[i]) {
  //     for (var j = 0; j < tmp[i].length; j++) {
        
  //         this._storage.insert(tmp[i][j][0], tmp[i][j][1]);
        
  //     }
  //   }
    
  // }
  var oldStorage = this._storage;

  this._limit = newlimit;
  this._filled = 0;
  this._storage = LimitedArray(newlimit);
  var fn=this._storage;
  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert: O(1) on average, O(n) worst case
// retrieve: O(1) on average, O(n) worst case
// remove: O(1) on average, O(n) worst case 

