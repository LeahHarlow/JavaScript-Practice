//terminology:
//ROOT -  the top node of the tree;
//CHILD -  node directly connected to another node beneath the root.
//PARENTS - the converse notion of a child;
//SIBLINGS - A group of nodes witht he same parent.
//LEAF -  the end node with no children
//EDGE - the connection between one node and another.

//BINARY TREE - max 2 children off any node and are sorted in a particular order. usually numbers.
//every number to the left is smaller than the parent and all greater numbers are to the right.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; //no duplicates
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(val){
    if(!this.root) return undefined;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(val < current.val){
        current = current.left;
      } else if(val > current.val){
        current = current.right;
      } else{
        found = true
      }
    }
    if(!found) return undefined;
    return current;
  }
}

let tree = new BinarySearchTree();

tree.insert(2);
tree.insert(1);
tree.insert(10);

//console.log(tree);

console.log("FOUND", tree.find(2))
